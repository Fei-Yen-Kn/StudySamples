<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">
        자료실 애플리케이션
      </router-link>
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasic">
        <span aria-hidden="true"></span><span aria-hidden="true"></span><span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbarBasic" class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item">메인으로이동</router-link>
        <router-link to="/datalist" class="navbar-item">자료실목록</router-link>
        <router-link to="/datainsert" class="navbar-item">자료 등록</router-link>
      </div>
    </div>
  </nav>
</template>
<script setup>
</script>  