<template>
    <DefaultLayout>
      <h1 class="center">Register</h1>
      <form @submit.prevent="handleRegister">
        <div class="input-field">
          <input v-model="username" type="text" id="username" required />
          <label for="username">Username</label>
        </div>
        <div class="input-field">
          <input v-model="email" type="email" id="email" required />
          <label for="email">Email</label>
        </div>
        <div class="input-field">
          <input v-model="password" type="password" id="password" required />
          <label for="password">Password</label>
        </div>
        <button class="btn waves-effect waves-light" type="submit">Register</button>
      </form>
    </DefaultLayout>
</template>
<script setup>
import { ref } from 'vue';
import { useUserStore } from '@/store';
import { useRouter } from 'vue-router';
const username = ref('');
const email = ref('');
const password = ref('');
const userStore = useUserStore();
const router = useRouter();
async function handleRegister() {
    try {
      await userStore.register({ username: username.value, email: email.value, password: password.value });
      alert('Registration successful!');
      router.push('/login');
    } catch (error) {
      alert('Registration failed: ' + error.response.data.message);
    }
}
</script>
<style scoped>
  form {
    max-width: 400px;
    margin: 0 auto;
  }
</style>  