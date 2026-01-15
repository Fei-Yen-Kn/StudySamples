import { createStore } from 'vuex';

const store = createStore({
  state: {
    isLoggedIn: false,
    token: null,
  },
  mutations: {
    login(state, token) {
      state.isLoggedIn = true;
      state.token = token;
      localStorage.setItem('token', token); // 로컬 스토리지에 토큰 저장
    },
    logout(state) {
      state.isLoggedIn = false;
      state.token = null;
      localStorage.removeItem('token'); // 로컬 스토리지에서 토큰 삭제
    },
  },
  actions: {
    login({ commit }, { username, password }) {
      // 여기서 더미 데이터와 비교하여 로그인 처리
      if (username === 'kkt' && password === '1234') {
        const token = 'dummy-token';
        commit('login', token);
      } else {
        throw new Error('Invalid credentials');
      }
    },
    logout({ commit }) {
      commit('logout');
    },
  },
  getters: {
    isLoggedIn: (state) => state.isLoggedIn,
    token: (state) => state.token,
  },
});

export default store;