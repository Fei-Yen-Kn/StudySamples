<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">MyApp2</a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/notices" class="nav-link">Notices</router-link>
          </li>
          <li class="nav-item" v-if="isAuthenticated">
            <router-link to="/boards" class="nav-link">Boards</router-link>
          </li>
          <li class="nav-item" v-if="isAuthenticated">
            <router-link to="/projects" class="nav-link">Projects</router-link>
          </li>
          <li class="nav-item" v-if="isAuthenticated">
            <router-link to="/tasks" class="nav-link">Tasks</router-link>
          </li>
          <li class="nav-item" v-if="!isAuthenticated">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
          <li class="nav-item" v-if="!isAuthenticated">
            <router-link to="/register" class="nav-link">Register</router-link>
          </li>
          <li class="nav-item" v-if="isAuthenticated">
            <a href="#" @click="logout" class="nav-link">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { computed } from 'vue'
import { useAuthStore } from '../store/authStore'
import { useRouter } from 'vue-router'
const authStore = useAuthStore()
const isAuthenticated = computed(() => authStore.isAuthenticated)
const router = useRouter()
function logout() {
  authStore.logout()
  router.push('/')
}
</script>