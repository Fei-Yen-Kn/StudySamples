<template>
  <div class="billiard-game">
    <div class="header">
      <div class="score-board">
        <div :class="{ active: turn === 'player' }">플레이어: {{ scores.player }}</div>
        <div :class="{ active: turn === 'computer' }">컴퓨터: {{ scores.computer }}</div>
      </div>
      <div class="game-info">
        <p>상태: {{ statusMessage }}</p>
        <p>쿠션: {{ collisionState.cushionCount }} | 뱅크샷: {{ collisionState.isBankShot ? 'YES' : 'NO' }}</p>
      </div>
    </div>

    <div class="canvas-wrapper">
      <canvas ref="canvasRef"></canvas>
      <div v-if="isAiming && turn === 'player'" class="guide-line"></div>
    </div>

    <div class="ui-footer">
      <button @click="resetGame">게임 리셋</button>
      <p>방법: 수구(흰공)를 드래그하여 반대 방향으로 당겼다 놓으세요!</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue';
import { Engine, Render, Runner, Bodies, Composite, Events, Vector, Body } from 'matter-js';

// --- 게임 상태 관리 ---
const canvasRef = ref(null);
const turn = ref('player'); // 'player' or 'computer'
const scores = reactive({ player: 0, computer: 0 });
const statusMessage = ref('플레이어 차례입니다.');
const isAiming = ref(false);
const isMoving = ref(false);

// 조준선 관련 상태
const dragStart = ref(null);
const dragEnd = ref(null);

// PBA 판정용 상태
const collisionState = reactive({
  cushionCount: 0,
  firstBallHit: false,
  secondBallHit: false,
  isBankShot: false, // 제1적구 맞기 전 쿠션 2번 이상이면 뱅크샷(2점)
});

// 물리 객체 참조
let engine, runner, cueBall, objBall1, objBall2;

onMounted(() => {
  initPhysics();
});

// --- 물리 엔진 초기화 ---
const initPhysics = () => {
  engine = Engine.create();
  engine.world.gravity.y = 0; // 상단 뷰이므로 중력 제거

  const render = Render.create({
    canvas: canvasRef.value,
    engine: engine,
    options: {
      width: 800,
      height: 400,
      background: '#0a5d2c',
      wireframes: false
    }
  });

  // 1. 벽 생성 (반발계수 0.8)
  const wallAttr = { isStatic: true, restitution: 0.8, friction: 0.1, label: 'wall' };
  const walls = [
    Bodies.rectangle(400, 0, 800, 40, wallAttr),   // 상
    Bodies.rectangle(400, 400, 800, 40, wallAttr), // 하
    Bodies.rectangle(0, 200, 40, 400, wallAttr),   // 좌
    Bodies.rectangle(800, 200, 40, 400, wallAttr)  // 우
  ];

  // 2. 공 생성 (PBA 공 크기 비율 적용)
  const ballAttr = (color, label) => ({
    restitution: 0.85, // 반발력
    frictionAir: 0.012, // 바닥 마찰 (서서히 멈춤)
    friction: 0.05,
    label: label,
    render: { fillStyle: color }
  });

  cueBall = Bodies.circle(200, 200, 12, ballAttr('white', 'cueBall'));
  objBall1 = Bodies.circle(600, 150, 12, ballAttr('red', 'objBall1'));
  objBall2 = Bodies.circle(600, 250, 12, ballAttr('yellow', 'objBall2'));

  Composite.add(engine.world, [...walls, cueBall, objBall1, objBall2]);

  // 3. 충돌 감지 로직 (PBA 판정 핵심)
  Events.on(engine, 'collisionStart', (event) => {
    event.pairs.forEach((pair) => {
      const { bodyA, bodyB } = pair;
      const labels = [bodyA.label, bodyB.label];

      // 벽에 부딪혔을 때
      if (labels.includes('wall') && labels.includes('cueBall')) {
        collisionState.cushionCount++;
      }

      // 첫 번째 적구 충돌
      if (!collisionState.firstBallHit && labels.includes('cueBall') && (labels.includes('objBall1') || labels.includes('objBall2'))) {
        collisionState.firstBallHit = true;
        // 뱅크샷 여부 판정: 첫 공 맞기 전 쿠션이 2개 이상이면 PBA 뱅크샷(2점)
        if (collisionState.cushionCount >= 2) {
          collisionState.isBankShot = true;
        }
      } 
      // 두 번째 적구 충돌
      else if (collisionState.firstBallHit && !collisionState.secondBallHit && labels.includes('cueBall') && (labels.includes('objBall1') || labels.includes('objBall2'))) {
        collisionState.secondBallHit = true;
      }
    });
  });

  // 4. 움직임 감시 루프
  Events.on(engine, 'afterUpdate', () => {
    const moving = Vector.magnitude(cueBall.velocity) > 0.1;
    if (isMoving.value && !moving) {
      isMoving.value = false;
      checkScoring();
    }
  });

  // 5. 마우스 드래그 타격 구현
  let startPos = null;
  canvasRef.value.addEventListener('mousedown', (e) => {
    if (turn.value === 'player' && !isMoving.value) {
      startPos = { x: e.offsetX, y: e.offsetY };
      isAiming.value = true;
    }
  });

  canvasRef.value.addEventListener('mouseup', (e) => {
    if (startPos) {
      const endPos = { x: e.offsetX, y: e.offsetY };
      const force = Vector.sub(startPos, endPos); // 드래그 반대 방향으로 힘 발생
      const strength = 0.005; // 힘의 세기 조절
      
      Body.applyForce(cueBall, cueBall.position, Vector.mult(force, strength));
      isMoving.value = true;
      isAiming.value = false;
      startPos = null;
      statusMessage.value = "공이 움직이고 있습니다...";
    }
  });

  // --- 점선 가이드라인 그리기 (매 프레임 렌더링 후 실행) ---
  // 
  Events.on(render, 'afterRender', () => {
    if (dragStart.value && dragEnd.value && turn.value === 'player' && !isMoving.value) {
      const ctx = render.context;
      
      // 1. 드래그 방향의 반대 방향(공이 나갈 방향) 계산
      const shotVector = Vector.sub(dragStart.value, dragEnd.value);
      const lineEnd = Vector.add(cueBall.position, Vector.mult(Vector.normalise(shotVector), 150));

      // 2. 점선 스타일 설정
      ctx.beginPath();
      ctx.setLineDash([5, 5]); // 5픽셀 선, 5픽셀 공백
      ctx.moveTo(cueBall.position.x, cueBall.position.y);
      ctx.lineTo(lineEnd.x, lineEnd.y);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.setLineDash([]); // 대시 설정 초기화 (다른 렌더링에 영향 안주게 함)
      
      // 3. 조준점 표시 (작은 원)
      ctx.beginPath();
      ctx.arc(lineEnd.x, lineEnd.y, 5, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.fill();
    }
  });

  // --- 이벤트 리스너 ---
  canvasRef.value.addEventListener('mousedown', (e) => {
    if (turn.value === 'player' && !isMoving.value) {
      const mousePos = { x: e.offsetX, y: e.offsetY };
      // 수구 근처를 클릭했는지 확인 (선택 사항)
      dragStart.value = mousePos;
    }
  });

  canvasRef.value.addEventListener('mousemove', (e) => {
    if (dragStart.value) {
      dragEnd.value = { x: e.offsetX, y: e.offsetY };
    }
  });

  window.addEventListener('mouseup', () => {
    if (dragStart.value && dragEnd.value) {
      const force = Vector.sub(dragStart.value, dragEnd.value);
      const strength = 0.005;
      
      Body.applyForce(cueBall, cueBall.position, Vector.mult(force, strength));
      isMoving.value = true;
      statusMessage.value = "공이 움직이고 있습니다...";
    }
    dragStart.value = null;
    dragEnd.value = null;
  });


  Render.run(render);
  runner = Runner.create();
  Runner.run(runner, engine);
};

// --- 판정 및 턴 교체 로직 ---
const checkScoring = () => {
  const isSuccess = collisionState.firstBallHit && collisionState.secondBallHit && collisionState.cushionCount >= 3;
  
  if (isSuccess) {
    const points = collisionState.isBankShot ? 2 : 1;
    scores[turn.value] += points;
    statusMessage.value = `득점 성공! (${points}점 추가)`;
    // 득점 시 한 번 더 공격 (PBA 룰)
    resetCollisionState();
    if (turn.value === 'computer') setTimeout(computerPlay, 1500);
  } else {
    statusMessage.value = "득점 실패. 턴이 넘어갑니다.";
    turn.value = turn.value === 'player' ? 'computer' : 'player';
    resetCollisionState();
    if (turn.value === 'computer') setTimeout(computerPlay, 1500);
  }
};

const resetCollisionState = () => {
  collisionState.cushionCount = 0;
  collisionState.firstBallHit = false;
  collisionState.secondBallHit = false;
  collisionState.isBankShot = false;
};

// --- 초간단 컴퓨터 AI ---
const computerPlay = () => {
  statusMessage.value = "컴퓨터가 조준 중...";
  setTimeout(() => {
    // 빨간공(objBall1) 방향으로 힘을 계산
    const targetPos = objBall1.position;
    const force = Vector.sub(targetPos, cueBall.position);
    const normalizedForce = Vector.normalise(force);
    const power = 0.15; // 일정한 힘
    
    Body.applyForce(cueBall, cueBall.position, Vector.mult(normalizedForce, power));
    isMoving.value = true;
    statusMessage.value = "컴퓨터 샷!";
  }, 1000);
};


const resetGame = () => window.location.reload();

</script>

<style scoped>
.billiard-game { font-family: sans-serif; display: flex; flex-direction: column; align-items: center; background: #222; color: white; min-height: 100vh; padding: 20px; }
.header { display: flex; justify-content: space-around; width: 800px; margin-bottom: 10px; }
.score-board { display: flex; gap: 40px; font-size: 24px; }
.active { color: #42b883; text-decoration: underline; font-weight: bold; }
.canvas-wrapper { position: relative; border: 15px solid #5d4037; border-radius: 10px; overflow: hidden; }
.ui-footer { margin-top: 20px; text-align: center; }
button { padding: 10px 25px; font-size: 16px; background: #42b883; border: none; color: white; border-radius: 5px; cursor: pointer; }
button:hover { background: #33a06f; }
</style>