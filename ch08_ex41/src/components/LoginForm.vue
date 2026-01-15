<template>
  <div class="login-form">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <label>
        Username:
        <input v-model="username" type="text" required />
      </label>
      <label>
        Password:
        <input v-model="password" type="password" required />
      </label>
      <button type="submit">Login</button>
      <p v-if="error" class="error">{{ error }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

const username = ref('');
const password = ref('');
const error = ref(null);

const handleLogin = async () => {
  try {
    await store.dispatch('login', { username: username.value, password: password.value });
    router.push({ name: 'home' }); // 로그인 성공 시 홈으로 이동
  } catch (err) {
    error.value = 'Invalid username or password'; // 오류 메시지
  }
};
</script>

<style scoped>
.error {
  color: red;
  font-size: 0.9em;
}
</style>