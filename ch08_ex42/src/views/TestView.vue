<template>
    <div class="container">
      <h1 class="title">Token Test</h1>
      <div class="field">
        <label class="label">Enter your token</label>
        <div class="control">
          <input
            type="text"
            class="input"
            v-model="token"
            placeholder="Enter your token"
            required
          />
        </div>
      </div>
      <div class="field">
        <div class="control">
          <button class="button is-primary" @click="loginWithToken">Login with Token</button>
        </div>
      </div>
      <div v-if="errorMessage" class="notification is-danger">
        {{ errorMessage }}
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const token = ref('');
  const errorMessage = ref('');
  
  const loginWithToken = () => {
    // 로컬 스토리지에 저장된 토큰과 비교
    const storedToken = localStorage.getItem('token');
    if (token.value === storedToken) {
      router.push({ name: 'token-result' });
    } else {
      errorMessage.value = 'Invalid token! Redirecting to Login...';
      setTimeout(() => {
        router.push({ name: 'login' });
      }, 2000); // 2초 후 로그인 페이지로 리다이렉트
    }
  };
  </script>