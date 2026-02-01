<template>
  <nav class="blue">
    <div class="nav-wrapper container">
      <a href="/" class="brand-logo">LMS</a>
      
      <!-- 모바일에서 보이는 메뉴 버튼 -->
      <a href="#" data-target="mobile-demo" class="sidenav-trigger">
        <i class="material-icons">Menu</i>
      </a>

      <!-- 모바일 메뉴 (Sidenav) -->
      <ul id="mobile-demo" class="sidenav">
        <li><router-link to="/">메인</router-link></li>
        <li><router-link to="/courses">강의목록</router-link></li>
        <li v-if="isLoggedIn"><router-link to="/enrollments">{{ isAdmin ? '수강 관리' : '수강 목록' }}</router-link></li>
        <li v-if="isLoggedIn"><router-link to="/reservations">{{ isAdmin ? '수강 예약 관리' : '수강예약 목록' }}</router-link></li>
        <li v-if="!isLoggedIn"><router-link to="/login">로그인</router-link></li>
        <li v-if="!isLoggedIn"><router-link to="/register">회원가입</router-link></li>
        <li v-if="isLoggedIn"><router-link to="/profile">마이페이지</router-link></li>
        <li v-if="isLoggedIn"><a @click="logout">로그아웃</a></li>
      </ul>

      <!-- 데스크탑에서 보이는 메뉴 (기존 nav) -->
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><router-link to="/">메인</router-link></li>
        <li><router-link to="/courses">강의목록</router-link></li>
        <li v-if="isLoggedIn"><router-link to="/enrollments">{{ isAdmin ? '수강 관리' : '수강 목록' }}</router-link></li>
        <li v-if="isLoggedIn"><router-link to="/reservations">{{ isAdmin ? '수강 예약 관리' : '수강예약 목록' }}</router-link></li>
        <li v-if="!isLoggedIn"><router-link to="/login">로그인</router-link></li>
        <li v-if="!isLoggedIn"><router-link to="/register">회원가입</router-link></li>
        <li v-if="isLoggedIn"><router-link to="/profile">마이페이지</router-link></li>
        <li v-if="isLoggedIn"><a @click="logout">로그아웃</a></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useAuthStore } from '@/store';
import { useRouter } from 'vue-router';
const authStore = useAuthStore();
const router = useRouter();
const isLoggedIn = computed(() => authStore.isLoggedIn);
const role = localStorage.getItem('role');
const isAdmin = computed(() => role === 'ADMIN');
function logout() {
  authStore.logout();
  router.push('/login');
}
onMounted(() => {
  const sidenav = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sidenav);  // Materialize에서 제공하는 Sidenav 초기화
});
</script>
<style scoped>
nav {
  margin-bottom: 20px;
}
</style>
