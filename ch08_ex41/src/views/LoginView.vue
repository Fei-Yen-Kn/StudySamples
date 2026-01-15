<template>
  <div class="container">
    <h1 class="title">Login</h1>
    <form @submit.prevent="login">
      <div class="field">
        <label class="label">Username</label>
        <div class="control">
          <input
            type="text"
            class="input"
            v-model="username"
            placeholder="Enter your username"
            required
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input
            type="password"
            class="input"
            v-model="password"
            placeholder="Enter your password"
            required
          />
        </div>
      </div>
      <div class="field">
        <div class="control">
          <button class="button is-primary" type="submit">Login</button>
        </div>
      </div>
      <div v-if="errorMessage" class="notification is-danger">
        {{ errorMessage }}
      </div>
      <p>테스트용 - username: "kkt", id: "1234"</p>
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
const name = ref('');
const errorMessage = ref('');

const login = async () => {
  try {
    await store.dispatch('login', { username: username.value, password: password.value, name: name.value });
    router.push({ name: 'home' });
  } catch (error) {
    errorMessage.value = error.message;
  }
};
</script>