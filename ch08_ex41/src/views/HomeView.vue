<template>
  <div class="container">
    <h1 class="title">Home Page</h1>
    <p class="subtitle">Welcome, {{ user?.username }}</p>
    <button class="button is-danger" @click="logout">Logout</button>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();
const user = computed(() => store.getters.user);

const logout = () => {
  store.dispatch('logout');
  router.push({ name: 'login' }); // 로그아웃 후 로그인 페이지로 이동
};
</script>