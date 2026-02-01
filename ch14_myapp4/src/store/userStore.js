import { defineStore } from 'pinia'
import { useDatabaseStore } from '../model/index'
export const useUserStore = defineStore('user', {
  state: () => ({
    currentUser: {},  // 로그인된 사용자 정보
    users: [],  // 전체 사용자 목록
    user: {},
  }),
  actions: {
    async fetchUser(username) {
      try {
        const database = useDatabaseStore()
        const response = await database.getUserByUsername(username);
        this.currentUser = response;
        this.user = response;
      } catch (error) {
        console.error('Failed to fetch user:', error);
      }
    },
    async updateUser(username, userData) {     // 사용자 프로필 수정
      try {
        const database = useDatabaseStore()
        const res = await database.getUserByUsername(username);
        const response = await database.editUser(res.id, userData)
        this.currentUser = response // 업데이트된 사용자 정보
      } catch (error) {
        console.error('Failed to update user:', error)
      }
    },
    async fetchUsers() {     // 사용자 목록 조회
      try {
        const database = useDatabaseStore()
        const response = await database.users
        this.users = response
      } catch (error) {
        console.error('Failed to fetch users:', error)
      }
    },
    async register(username, email, password, nickname){
      const database = useDatabaseStore()
      try {
        this.user = { username: username, email: email, password: password, name: nickname }
        await database.addUser(this.user)
      } catch (error){
        console.error('Failed to register user:', error)
      }
    }
  }
})