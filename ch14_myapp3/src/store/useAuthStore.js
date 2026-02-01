import { defineStore } from 'pinia';
import model from '../model/index';
import router from '@/router'; // 라우터 직접 가져오기
const { addUser, editUser, deleteUser, getUsers, getItemByUsername } = model;

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,  // 현재 로그인된 사용자
    users: null, // 전체 사용자 목록
  }),

  getters: {
    // 사용자가 로그인 상태인지 확인
    isAuthenticated: (state) => !!state.user,
  },

  actions: {
    async login(username, password) {
      try {
        const response = await getItemByUsername(username);
        if (response.password === password) {
          this.user = response; // 로그인 성공 시 사용자 정보 저장
          localStorage.setItem('username', username);
          localStorage.setItem('userId', response.id);
          router.push('/'); // 로그인 후 메인 페이지로 이동
        } else {
          throw new Error('Invalid username or password');
        }
      } catch (error) {
        console.error('Login failed:', error);
        throw error;
      }
    },

    async register(userData) {
      try {
        await addUser(userData);
      } catch (error) {
        console.error('Registration failed:', error);
        throw error;
      }
    },

    async getUsers() {
      try {
        const response = await getUsers();
        this.users = response;
      } catch (error) {
        console.error('Failed to fetch users:', error);
        throw error;
      }
    },

    async fetchUserProfile(username) {
      try {
        const response = await getItemByUsername(username);
        this.user = response;
      } catch (error) {
        console.error('Fetching user profile failed:', error);
        this.user = { username: 'Unknown', email: '-', role: 'USER', createdAt: '-' };
      }
    },

    async editUser(username, userData) {
      try {
        const response = await getItemByUsername(username);
        await editUser(response.id, userData);
      } catch (error) {
        console.error('Edit failed:', error);
        throw error;
      }
    },

    async deleteUser(username) {
      try {
        const response = await getItemByUsername(username);
        await deleteUser(response.id);
      } catch (error) {
        console.error('Delete failed:', error);
        throw error;
      }
    },

    logout() {
      this.user = null; // 사용자 정보 초기화
      localStorage.removeItem('username');
      localStorage.removeItem('userId');
      router.push('/'); // 로그아웃 후 메인 페이지로 이동
    },
  },
});