<template>
  <div class="container">
    <h1 class="title">Login Page</h1>
    <form @submit.prevent="handleLogin">
      <div class="field">
        <label class="label">Username</label>
        <div class="control">
          <input class="input" type="text" v-model="username" required>
        </div>
      </div>
      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input class="input" type="password" v-model="password" required>
        </div>
      </div>
      <button class="button is-primary" type="submit">Login</button>
    </form>
    <p class="help is-danger" v-if="error">{{ error }}</p>
    <hr>
    <p>테스트용 - username: "kkt", password: "1234"</p>
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
const error = ref('');

const handleLogin = async () => {
  try {
    await store.dispatch('login', { username: username.value, password: password.value });
    router.push({ name: 'home' }); // 로그인 후 HomeView로 이동
  } catch (err) {
    error.value = err.message; // 오류 메시지 표시
  }
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}
</style>