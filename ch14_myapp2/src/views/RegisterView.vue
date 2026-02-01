<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <h4>Register</h4>
          </div>
          <div class="card-body">
            <form @submit.prevent="handleRegister">
              <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input type="text" id="username" class="form-control" v-model="username" required />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" id="password" class="form-control" v-model="password" required />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" id="email" class="form-control" v-model="email" required />
              </div>
              <div class="mb-3">
                <label for="nickname" class="form-label">Name</label>
                <input type="text" id="nickname" class="form-control" v-model="nickname" required />
              </div>
              <div class="mb-3">
                <input type="hidden" id="role" v-model="role" value="USER" required>
              </div>
              <button type="submit" class="btn btn-primary w-100">Register</button>
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
const email = ref('')
const nickname = ref('')
const role = ref('USER')
const router = useRouter()
const authStore = useAuthStore()
const handleRegister = async () => {
  try {
    await authStore.register({ username: username.value, password: password.value, 
      email: email.value, name: nickname.value, role: role.value })
    router.push('/login')  // 회원가입 성공 후 로그인 페이지로 이동
  } catch (error) {
    console.error('Registration failed:', error)
  }
}
</script>