import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import LoginPage from '../pages/LoginPage.vue';
import RegisterPage from '../pages/RegisterPage.vue';
import ProfilePage from '../pages/ProfilePage.vue';
import CoursesList from '../pages/CoursesList.vue';
import CourseDetail from '../pages/CourseDetail.vue';
import CourseForm from '../pages/CourseForm.vue';
import EnrollmentList from '../pages/EnrollmentList.vue';
import ReservationList from '../pages/ReservationList.vue';
import ReservationForm from '../pages/ReservationForm.vue';
import QuestionsList from '../pages/QuestionsList.vue';
import QuestionForm from '../pages/QuestionForm.vue';

const routes = [
  { path: '/', component: HomePage, meta: { requiresAuth: false } },
  { path: '/login', component: LoginPage, meta: { requiresAuth: false } },
  { path: '/register', component: RegisterPage, meta: { requiresAuth: false } },
  { path: '/profile', component: ProfilePage, meta: { requiresAuth: true } },
  { path: '/courses', component: CoursesList, meta: { requiresAuth: true } },
  { path: '/courses/:id', component: CourseDetail, meta: { requiresAuth: true } },
  { path: '/courses/new', component: CourseForm, meta: { requiresAuth: true } },
  { path: '/courses/edit/:id', component: CourseForm, meta: { requiresAuth: true } },
  { path: '/enrollments', component: EnrollmentList, meta: { requiresAuth: true } },
  { path: '/reservations', component: ReservationList, meta: { requiresAuth: true } },
  { path: '/reservations/new/:courseId', component: ReservationForm, meta: { requiresAuth: true } },
  { path: '/questions', component: QuestionsList, meta: { requiresAuth: true } },
  { path: '/questions/new', component: QuestionForm, meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router; // 기본 내보내기