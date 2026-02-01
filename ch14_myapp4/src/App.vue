<template>
  <div id="app" class="container">
    <header>
      <nav class="top-bar">
        <div class="top-bar-left">
          <ul class="menu">
            <li v-if="!isAuthenticated">
              <a class="top-bar-item" href="/">
                <img src="./assets/vue.svg" alt="Logo" class="logo" />
              </a>
            </li>
            <li v-if="isAuthenticated && user.profile_picture">
              <img :src="`./assets/${user.profile_picture}`" alt="Profile Picture" class="logo" />
            </li>
            <li><router-link to="/" class="menu-item">Home</router-link></li>
            <li v-if="isAuthenticated">
              <router-link to="/chat" class="menu-item">Chat</router-link>
            </li>
            <li v-if="isAuthenticated">
              <router-link to="/messages" class="menu-item">Message</router-link>
            </li>
            <li v-if="isAuthenticated">
              <router-link to="/posts" class="menu-item">Post</router-link>
            </li>
          </ul>
        </div>
        <div class="top-bar-right">
          <ul class="menu">
            <li v-if="!isAuthenticated">
              <router-link to="/login" class="menu-item">Login</router-link>
            </li>
            <li v-if="!isAuthenticated">
              <router-link to="/register" class="menu-item">Register</router-link>
            </li>
            <li v-if="isAuthenticated">
              <router-link to="/profile" class="menu-item">Profile</router-link>
            </li>
            <li v-if="isAuthenticated">
              <button @click="logout" class="menu-item">Logout</button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/store/authStore'
import { useUserStore } from '@/store/userStore'
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router' // 라우터 사용
const authStore = useAuthStore()
const userStore = useUserStore()
const isAuthenticated = computed(() => authStore.isAuthenticated)  // 로그인 상태 확인
const user = computed(() => userStore.user)  // 로그인 상태 확인
const router = useRouter()
const logout = () => {  // 로그아웃 처리
  authStore.logout()
  router.push("/")
}
onMounted(async () => {
  authStore.restoreToken();
  const username = localStorage.getItem("username");
  if(username) {
    await userStore.fetchUser(username); // 사용자 정보 가져오기
    console.log(user.value);
  }
})
</script>
<style>
@import "@/styles/foundation.css";
.container {
  margin-top: 20px;
}
.menu a.menu-item, .menu button.menu-item {
  margin-right: 15px;
  color: #1779ba;
  display:block;
  padding: .7rem 1rem;
  cursor: pointer;
}
.top-bar-left .menu a.menu-item {
  padding-top: 1.8rem;
}
.logo {
  width: 50px;
}
.cell {
    margin-bottom: 16px;
}
.title {
  text-align: center;
  padding: 1rem 2rem;
}
.msgbox {
  background-color: #fcf9f6;
  padding: 36px;
}
</style>