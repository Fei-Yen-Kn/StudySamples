import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import ContentPage from '../pages/ContentPage.vue';
import NoticePage from '../pages/NoticePage.vue';
import LoginPage from '../pages/LoginPage.vue';
import RegisterPage from '../pages/RegisterPage.vue';
import UserProfile from '../components/UserProfile.vue';
import NoticeDetail from '../components/NoticeDetail.vue';
import NoticeForm from '../components/NoticeForm.vue';
import NoticeEdit from '../components/NoticeEdit.vue';
import ContentForm from '../components/ContentForm.vue';
import ContentDetail from '../components/ContentDetail.vue';
import GalleryForm from '../components/GalleryForm.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/contents', component: ContentPage },
  { path: '/notices', component: NoticePage },
  { path: '/notices/new', component: NoticeForm },
  { path: '/notices/:id', component: NoticeDetail },
  { path: '/notices/edit/:id', component: NoticeEdit },
  { path: '/contents/new', component: ContentForm },
  { path: '/contents/:id', component: ContentDetail },
  { path: '/gallery/new/:contentId', name:'GalleryForm', component: GalleryForm },
  { path: '/login', component: LoginPage },
  { path: '/register', component: RegisterPage },
  { path: '/profile', component: UserProfile },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;