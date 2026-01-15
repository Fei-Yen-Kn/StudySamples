import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      user: null, // 로그인한 사용자 정보
    };
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    clearUser(state) {
      state.user = null; // 사용자 정보를 초기화
    },
  },
  actions: {
    login({ commit }, user) {
      // 실제 인증 로직은 여기에 넣을 수 있습니다. 더미 데이터를 사용.
      const dummyUser = { username: 'kkt', password: '1234', name: '김기태' };

      if (user.username === dummyUser.username && user.password === dummyUser.password) {
        commit('setUser', user);
        sessionStorage.setItem('user', JSON.stringify(user)); // 세션 스토리지에 저장
      } else {
        throw new Error('Invalid credentials');
      }
    },
    logout({ commit }) {
      commit('clearUser'); // 사용자 정보 초기화
      sessionStorage.removeItem('user'); // 세션 스토리지에서 제거
    },
    autoLogin({ commit }) {
      const user = sessionStorage.getItem('user');
      if (user) {
        commit('setUser', JSON.parse(user));
      }
    },
  },
  getters: {
    isLoggedIn(state) {
      return !!state.user; // 로그인 여부
    },
    user(state) {
      return state.user; // 현재 사용자 정보
    },
  },
});

export default store;