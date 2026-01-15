import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import HomeView from '../views/HomeView.vue';
import TestView from '../views/TestView.vue'; // 새로 추가
import TokenResult from '../views/TokenResult.vue'; // 새로 추가

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: true }, // 인증이 필요한 경로
  },
  {
    path: '/test',
    name: 'test',
    component: TestView, // 추가된 라우트
    meta: { requiresAuth: true },
  },
  {
    path: '/token-result',
    name: 'token-result',
    component: TokenResult, // 추가된 라우트
    meta: { requiresAuth: true },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/login',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 인증 확인을 위한 네비게이션 가드
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('token');
  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router;