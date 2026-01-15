import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import TokenTestView from '../views/TokenTestView.vue';
import TokenResultView from '../views/TokenResultView.vue';
import store from '../store';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: true }, // 인증이 필요한 경로
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/token-test',
    name: 'token-test',
    component: TokenTestView,
    meta: { requiresAuth: true }, // 인증이 필요한 경로
  },
  {
    path: '/token-result',
    name: 'token-result',
    component: TokenResultView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 네비게이션 가드
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isLoggedIn = store.getters.isLoggedIn;

  if (requiresAuth && !isLoggedIn) {
    next({ name: 'login' }); // 로그인 페이지로 리다이렉트
  } else {
    next(); // 다음으로 진행
  }
});

export default router;