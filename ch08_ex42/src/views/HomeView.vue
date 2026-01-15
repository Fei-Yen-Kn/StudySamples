<template>
  <div class="container">
    <h1 class="title">Home Page</h1>
    <p class="subtitle">Welcome, {{ user?.username }}</p>
    <button class="button is-danger" @click="logout">Logout</button> &nbsp; &nbsp;
    <router-link to="/test">
      <button class="button is-info">Token Test</button> <!-- Token Test 버튼 추가 -->
    </router-link>
    <div class="notification is-info mt-4">
      <strong>먼저 생성된 토큰을 복사하기 해주세요 :</strong> {{ token }}
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();
const user = computed(() => store.getters.user);
const token = ref(localStorage.getItem('token') || ''); // 로컬 스토리지에서 토큰 가져오기

const logout = () => {
  store.dispatch('logout');
  localStorage.removeItem('token'); // 로컬스토리지에서 토큰 제거
  router.push({ name: 'login' }); // 로그아웃 후 로그인 페이지로 이동
};
</script>