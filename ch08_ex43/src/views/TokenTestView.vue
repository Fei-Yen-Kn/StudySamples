<template>
    <div class="container">
      <h1 class="title">Token Test Page</h1>
      <button class="button is-link" @click="handleTokenTest">Test Token</button>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  import { useStore } from 'vuex';
  
  const router = useRouter();
  const store = useStore();
  
  const handleTokenTest = () => {
    const token = store.getters.token;
    if (token) {
      router.push({ name: 'token-result' }); // 토큰이 있을 경우 TokenResultView로 이동
    } else {
      router.push({ name: 'login' }); // 토큰이 없을 경우 LoginView로 이동
    }
  };
  </script>
  
  <style scoped>
  .container {
    margin-top: 20px;
  }
  </style>