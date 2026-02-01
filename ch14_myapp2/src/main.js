import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'  // Bootstrap CSS 불러오기
const app = createApp(App)
app.use(createPinia())  // Pinia 상태 관리 라이브러리 사용
app.use(router)         // Vue Router 사용
app.mount('#app')