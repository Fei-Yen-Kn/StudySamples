<template>
  <div class="container">
    <h1 class="title">Home Page</h1>
    <p class="subtitle">Welcome to the Home Page!</p>
    <button class="button is-link" @click="goToTokenTest">Go to Token Test</button>

    <div class="notification is-info mt-4">
      <strong>Generated Token:</strong> {{ token }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const token = ref(localStorage.getItem('token') || ''); // 로컬 스토리지에서 토큰 가져오기

const goToTokenTest = () => {
  router.push({ name: 'token-test' }); // Token Test 페이지로 이동
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}
</style>