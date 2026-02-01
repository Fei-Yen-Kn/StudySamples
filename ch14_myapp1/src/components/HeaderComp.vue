<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <strong>MyApp1</strong>
      </a>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link v-if="isAuthenticated" to="/cart" class="navbar-item"
          >Cart</router-link
        >
      </div>
      <div class="navbar-end">
        <router-link v-if="!isAuthenticated" to="/login" class="navbar-item"
          >Login</router-link
        >
        <router-link v-if="!isAuthenticated" to="/register" class="navbar-item"
          >Register</router-link
        >
        <a v-if="isAuthenticated" @click="logout" class="navbar-item">Logout</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed } from "vue";
import { useAuthStore } from "../store/auth";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();
const isAuthenticated = computed(() => authStore.isAuthenticated);

function logout() {
  authStore.logout();
  router.push("/"); // 로그아웃 후 홈으로 리디렉션
}
</script>
