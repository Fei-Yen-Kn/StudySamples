<template>
    <div class="register-page">
      <h2>회원 가입</h2><hr/>
      <form @submit.prevent="registerUser" class="grid-container">
        <div class="grid-x grid-padding-x">
          <div class="cell small-12 medium-12">
            <label for="username">UserID</label>
            <input type="text" v-model="username" id="username" class="input-group-field" required />
          </div>
          <div class="cell small-12 medium-12">
            <label for="email">Email</label>
            <input type="email" v-model="email" id="email" class="input-group-field" required />
          </div>
          <div class="cell small-12 medium-12">
            <label for="password">Password</label>
            <input type="password" v-model="password" id="password" class="input-group-field" required />
          </div>
          <div class="cell small-12 medium-12">
            <label for="nickname">Name</label>
            <input type="text" v-model="nickname" id="nickname" class="input-group-field" required />
          </div>
          <div class="cell small-12 medium-12">
            <button type="submit" class="button success">회원가입</button> &nbsp; &nbsp;
            <router-link to="/login" class="button success">로그인</router-link>
          </div>
        </div>
      </form>
    </div>
  </template>
  <script setup>
  import { ref } from 'vue';
  import { useUserStore } from '@/store/userStore';  // userStore 가져오기
  import { useRouter } from 'vue-router'; // 라우터 사용
  const username = ref('');
  const email = ref('');
  const password = ref('');
  const nickname = ref('');
  const registerUser = async () => {  // 회원가입 처리 함수
  const userStore = useUserStore(); // userStore 사용
  const router = useRouter(); // 라우터 사용
  try {     // 회원가입 처리 (userStore에 사용자 정보 저장)
    await userStore.register(username.value, email.value, password.value, nickname.value);
    router.push('/'); // 홈 페이지로 이동
  } catch (error) {
    console.error('Registration failed:', error);
  }
};
  </script>
  <style scoped>
  .register-page {
    padding: 20px;
  }
  .register-page .cell {
    margin-bottom: 16px;
  }
  .button.success {
    color: #fff;
  }
  </style>
  