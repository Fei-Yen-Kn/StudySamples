<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <h4>Login</h4>
          </div>
          <div class="card-body">
            <form @submit.prevent="handleLogin">
              <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input type="text" id="username" class="form-control" v-model="username" required />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" id="password" class="form-control" v-model="password" required />
              </div>
              <button type="submit" class="btn btn-primary w-100">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../store/authStore'
const username = ref('')
const password = ref('')
const router = useRouter()
const authStore = useAuthStore()
const handleLogin = async () => {
  try {
    // 로그인 API 호출 (예시로 Pinia 상태로 설정)
    await authStore.login(username.value, password.value)
    router.push('/')  // 로그인 성공 후 홈으로 이동
  } catch (error) {
    console.error('Login failed:', error)
  }
}
</script>  