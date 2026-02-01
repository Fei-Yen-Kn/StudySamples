<template>
  <div class="box">
    <h3 class="title is-3">로그인</h3>
    <hr />
    <form @submit.prevent="handleLogin">
      <div class="field">
        <label class="label">Username</label>
        <div class="control">
          <input
            v-model="username"
            class="input"
            placeholder="Username"
            required
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input
            v-model="password"
            type="password"
            class="input"
            placeholder="Password"
            required
          />
        </div>
      </div>
      <button type="submit" class="button is-primary">Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "../store/auth";
import { useRouter } from "vue-router";

const username = ref("");
const password = ref("");
const authStore = useAuthStore();
const router = useRouter();

async function handleLogin() {
  try {
    await authStore.login(username.value, password.value);
    router.push("/");
  } catch (error) {
    console.error("로그인 실패", error);
  }
}
</script>
