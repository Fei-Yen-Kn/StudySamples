<template>
  <header class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="#">      <!-- 로고 -->
        <img src="@/assets/logo.png" alt="Logo" width="112" height="28">
        <span class="ml-2 has-text-weight-bold">My Portfolio</span>
      </a>
      <a role="button" class="navbar-burger" :class="{ 'is-active': isActive }" aria-label="menu" aria-expanded="false" @click="toggleMenu">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div :class="['navbar-menu', { 'is-active': isActive }]">
      <div class="navbar-start">
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">About</a>
          <div class="navbar-dropdown">
            <a class="navbar-item" href="#">Team</a>
            <a class="navbar-item" href="#">Company</a>
          </div>
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">Services</a>
          <div class="navbar-dropdown">
            <a class="navbar-item" href="#">Consulting</a>
            <a class="navbar-item" href="#">Development</a>
          </div>
        </div>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a href="#" class="button is-light">Sign up</a>
            <a href="#" class="button is-light">Log in</a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
import { ref } from 'vue';
const isActive = ref(false);   // 네비게이션 메뉴 활성화 상태
const toggleMenu = () => {  // 메뉴 토글 함수
  isActive.value = !isActive.value;
};
</script>  