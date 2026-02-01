<template>
    <div class="container mt-5">
      <h1>프로젝트 매니저에 오신 것을 환영합니다.</h1><hr/>
      <p>당신이 진행하는 프로젝트와 작업을 확인하시기 바랍니다.</p>
      <div v-if="isAuthenticated">
        <router-link to="/boards" class="btn btn-secondary">대시보드 보기</router-link>
        <router-link to="/projects" class="btn btn-secondary ms-3">프로젝트 보기</router-link>
      </div>
      <div v-else>
        <p>작업을 하시려면 <router-link to="/login" class="btn btn-primary">로그인</router-link>하시기 바랍니다.</p>
      </div>
    </div>
  </template>
  <script setup>
  import { useAuthStore } from '../store/authStore'
  const authStore = useAuthStore()
  const isAuthenticated = authStore.isAuthenticated
  </script>