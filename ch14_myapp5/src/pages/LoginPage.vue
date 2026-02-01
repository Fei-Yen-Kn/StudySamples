<template>
  <DefaultLayout>
    <h1 class="center">Login</h1>
    <form @submit.prevent="handleLogin">
      <div class="input-field">
        <input v-model="username" type="text" id="username" required />
        <label for="username">Username</label>
      </div>
      <div class="input-field">
        <input v-model="password" type="password" id="password" required />
        <label for="password">Password</label>
      </div>
      <button class="btn waves-effect waves-light" type="submit">Login</button>
    </form>
  </DefaultLayout>
</template>
<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/store';
import { useRouter } from 'vue-router';
const username = ref('');
const password = ref('');
const authStore = useAuthStore();
const router = useRouter();
async function handleLogin() {
  try {
    await authStore.login(username.value, password.value);
    router.push('/'); // 로그인 성공 시 홈으로 이동
  } catch (error) {
    console.error('Login failed:', error.message);
  }
}
</script>

<style scoped>
form {
  max-width: 400px;
  margin: 0 auto;
}
</style>