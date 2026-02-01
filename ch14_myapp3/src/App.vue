<template>
  <div id="app">
    <nav class="pure-menu pure-menu-horizontal" style="border-bottom:3px solid #c9c8c7;">
      <a class="pure-menu-heading" href="#">CMS App</a>
      <ul class="pure-menu-list">
        <li class="pure-menu-item">
          <router-link to="/" class="pure-menu-link">Home</router-link>
        </li>
        <li class="pure-menu-item">
          <router-link to="/notices" class="pure-menu-link">공지사항</router-link>
        </li>
        <li v-if="isAuthenticated" class="pure-menu-item">
          <router-link to="/contents" class="pure-menu-link">콘텐츠</router-link>
        </li>
      </ul>
      <ul class="pure-menu-list" style="float:right">
        <!-- 로그인하지 않은 경우 -->
        <li v-if="!isAuthenticated" class="pure-menu-item">
          <router-link to="/login" class="pure-menu-link">로그인</router-link>
        </li>
        <li v-if="!isAuthenticated" class="pure-menu-item">
          <router-link to="/register" class="pure-menu-link">회원가입</router-link>
        </li>
        <!-- 로그인한 경우 -->
        <li v-if="isAuthenticated" class="pure-menu-item">
          <router-link to="/profile" class="pure-menu-link">내 프로필</router-link>
        </li>
        <li v-if="isAuthenticated" class="pure-menu-item">
          <button @click="logout" class="pure-button">로그아웃</button>
        </li>
      </ul>
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>
<script setup>
import { computed } from 'vue';
import { useAuthStore } from './store/useAuthStore'; // Pinia store 가져오기
const authStore = useAuthStore();
// 로그아웃 처리
const logout = () => {
  authStore.logout(); // 로그아웃
};
// 로그인 상태를 가져오기
const isAuthenticated = computed(() => authStore.isAuthenticated);
</script>
<style>
#app {
  margin: 20px;
}
nav {
  margin-bottom: 20px;
}
.title {
  text-align: center;
}
.fr-content {
  width:212px; 
  margin:20px auto;
}
fieldset .pure-button {
  margin-top:14px;
}
.pure-form-stacked input:not([type]) {
  margin-bottom: 14px;
}
</style>