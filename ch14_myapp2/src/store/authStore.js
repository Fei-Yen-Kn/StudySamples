import { defineStore } from 'pinia'
import useStore from '@/store/index';
export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    user: null,
  }),
  actions: {
    async register(userData) {
      const store = useStore()
      try {
        const response = await store.setUser(userData)
        console.log('Registration successful:', response)
      } catch (error) {
        console.error('Registration failed:', error)
        throw error
      }
    },
    async login(username, password) {
      const store = useStore()
      try {
        const response = await store.getUserByUsername(username);
        if(response.password === password){
          this.isAuthenticated = true
          this.user = response
          console.log('Login successful:', response)
          localStorage.setItem("username", username)
          localStorage.setItem("userId", response.id)
        } else {
          console.error('Login failed:', error)  
        }
      } catch (error) {
        console.error('Login failed:', error)
        throw error
      }
    },
    logout() {
      this.isAuthenticated = false
      this.user = null
      localStorage.removeItem("username")
      localStorage.removeItem("userId")
    },
  },
})