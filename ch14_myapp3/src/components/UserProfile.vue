<template>
    <div class="pure-g">
      <div class="pure-u-1">
        <h2>회원 프로필</h2><hr/>
        <p><strong>아이디:</strong> {{ user.username }}</p>
        <p><strong>이메일:</strong> {{ user.email }}</p>
        <p><strong>권한:</strong> {{ user.role }}</p>
        <p><strong>가입일:</strong> {{ user.created_at }}</p>
        <router-link to="/users/edit" class="pure-button pure-button-primary">프로필 수정</router-link>
      </div>
    </div>
  </template>
<script setup>
import { computed } from 'vue';
import { useAuthStore } from '../store/useAuthStore';
import { onMounted } from 'vue';
const authStore = useAuthStore();
onMounted(async () => {
  try {
    const username = localStorage.getItem('username');
    if (username) {
      await authStore.fetchUserProfile(username);
    } else {
      console.error('Username not found in localStorage.');
    }
  } catch (error) {
    console.error('Failed to fetch user profile:', error);
  }
});
const user = computed(() => authStore.user);
</script>
  