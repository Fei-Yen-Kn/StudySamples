<template>
    <div class="login-page">
      <h2>로그인</h2>
      <form @submit.prevent="loginUser" class="grid-container">
        <div class="grid-x grid-padding-x">
          <div class="cell small-12 medium-12">
            <label for="username">UserID</label>
            <input type="text" v-model="username" id="username" class="input-group-field" required />
          </div>
          <div class="cell small-12 medium-12">
            <label for="password">Password</label>
            <input type="password" v-model="password" id="password" class="input-group-field" required />
          </div>
          <div class="cell small-12">
            <button type="submit" class="button primary">로그인</button> &nbsp; &nbsp;
            <router-link to="/register" class="button">회원가입</router-link>
          </div>
        </div>
      </form>
      <p></p>
    </div>
  </template>
<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/store/authStore'; // authStore 가져오기
import { useRouter } from 'vue-router'; // 라우터 사용
const username = ref('');
const password = ref('');
const authStore = useAuthStore(); // authStore 사용
const router = useRouter();
const loginUser = async () => {  // 로그인 처리 함수
  try {
    await authStore.login(username.value, password.value);
    router.push('/'); // 홈 페이지로 이동 (로그인 후)
  } catch (error) {
    console.error('Login failed:', error);
    alert('Login failed. Please check your credentials.');
  }
};
</script>
  <style scoped>
  .login-page {
    padding: 20px;
  }
  .login-page .cell {
    margin-bottom: 16px;
  }
  </style>  