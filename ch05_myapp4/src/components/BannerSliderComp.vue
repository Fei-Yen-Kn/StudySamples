<template>
  <div class="carousel carousel-slider center">
    <div class="carousel-item white-text" v-for="slide in slides" :key="slide.id" :style="{ backgroundImage: 'url(' + slide.image + ')', backgroundSize: 'cover', height: '400px' }">
      <h3>{{ slide.title }}</h3>
      <p class="light">{{ slide.description }}</p>
      <a href="#" class="btn waves-effect waves-light">더보기</a>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import M from 'materialize-css';
const slides = ref([  // 슬라이드 데이터
  { id: 1, title: '최신 상품 출시', description: '새로운 상품을 만나보세요!',
    image: require('@/assets/slide1.jpg') },
  { id: 2, title: '특별 할인 이벤트', description: '지금 구매하면 할인 혜택을 드립니다.',
    image: require('@/assets/slide2.jpg') },
  { id: 3, title: '무료 배송 서비스', description: '모든 주문에 대해 무료 배송을 제공합니다.',
    image: require('@/assets/slide3.jpg') }
]);
onMounted(() => {  // 초기화 함수
  const elems = document.querySelectorAll('.carousel.carousel-slider');
  M.Carousel.init(elems, {
    fullWidth: true, indicators: true, duration: 200,
    shift: 5, padding: 0, numVisible: 3, noWrap: false
  });
});
</script>
<style scoped>
.carousel-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.carousel-item h3 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}
.carousel-item p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}
.carousel-item .btn {
  background-color: rgba(0, 0, 0, 0.7);
}
</style>    