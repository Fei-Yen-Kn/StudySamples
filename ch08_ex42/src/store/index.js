import { createStore } from 'vuex';

const store = createStore({
  state: {
    user: null,
    token: null,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_TOKEN(state, token) {
      state.token = token;
    },
    LOGOUT(state) {
      state.user = null;
      state.token = null;
    },
  },
  actions: {
    login({ commit }, { username, password }) {
      // 더미 데이터
      const dummyUser = {
        username: 'kkt',
        password: '1234',
        token: 'dummy-token-123',
      };

      if (username === dummyUser.username && password === dummyUser.password) {
        commit('SET_USER', { username });
        commit('SET_TOKEN', dummyUser.token);
      } else {
        throw new Error('Invalid credentials');
      }
    },
    logout({ commit }) {
      commit('LOGOUT');
    },
    autoLogin({ commit }) {
      const token = localStorage.getItem('token');
      if (token) {
        // 더미 유저로 자동 로그인
        commit('SET_TOKEN', token);
        commit('SET_USER', { username: 'admin' }); // 실제로는 API 요청으로 유저 정보를 가져와야 함
      }
    },
  },
  getters: {
    isAuthenticated(state) {
      return !!state.token;
    },
    user(state) {
      return state.user;
    },
  },
});

export default store;