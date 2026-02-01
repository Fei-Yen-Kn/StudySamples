import { defineStore } from 'pinia';
import { useDatabaseStore } from '../model/index';
export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('auth_token') || null,
    user: {},
    username: null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token, // 로그인 상태 여부
    getUser: (state) => state.user,
  },
  actions: {
    async login(username, password) {
      try {
        const database = useDatabaseStore(); // Pinia 스토어 호출
        const response = await database.getUserByUsername(username);
        if (response && response.password === password) {
          this.token = response.token; // 토큰 저장
          this.username = username;
          this.user = await database.getUserById(response.id);
    
          localStorage.setItem("auth_token", this.token);
          localStorage.setItem("username", this.username);
          localStorage.setItem("user", JSON.stringify(this.user)); 
    
          // 상태 업데이트는 token 기반 getter에 의해 자동으로 처리
        } else {
          alert("Login failed: Invalid username or password.");
        }
      } catch (error) {
        console.error('Login failed:', error);
      }
    },
    logout() {
      this.token = null;
      this.user = {};
      this.username = null;
      localStorage.removeItem('auth_token');
      localStorage.removeItem('username');
      localStorage.removeItem('user');
    },
    restoreToken() {
      const savedToken = localStorage.getItem('auth_token');
      const savedUsername = localStorage.getItem("username");
      const savedUser = localStorage.getItem("user");

      if (savedToken) {
        this.token = savedToken;
        this.username = savedUsername || null;
        this.user = savedUser ? JSON.parse(savedUser) : {}; // user 정보 복원
      }
    },
  },
});