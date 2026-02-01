import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import BoardView from '../views/BoardView.vue'
import ProjectView from '../views/ProjectView.vue'
import NoticeView from '../views/NoticeView.vue'
import BoardList from '../components/BoardList.vue'
import ProjectList from '../components/ProjectList.vue'
import TaskList from '../components/TaskList.vue'
import NoticeList from '../components/NoticeList.vue'
const routes = [
  { path: '/', component: HomeView },
  { path: '/login', component: LoginView },
  { path: '/register', component: RegisterView },
  { path: '/boards/:id', component: BoardView },
  { path: '/projects/:id', component: ProjectView },
  { path: '/notices/:id', component: NoticeView },
  { path: '/boards', component: BoardList },
  { path: '/projects', component: ProjectList },
  { path: '/tasks', component: TaskList },
  { path: '/notices', component: NoticeList },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router