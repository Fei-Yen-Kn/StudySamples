import { createApp } from 'vue';  // Vue 3 생성 함수
import App from './App.vue';      // 루트 컴포넌트
import router from './router'; 
import { createPinia } from 'pinia';  // Pinia 상태 관리
import './styles/base.css';  // 기본 스타일
import './styles/foundation.css';  // Foundation CSS
import './styles/variables.css';  // 스타일 변수
const pinia = createPinia();  // Pinia 상태 관리 설정
const app = createApp(App);  // Vue 애플리케이션 생성
app.use(router);  // Vue Router 및 Pinia 사용 설정
app.use(pinia);
app.mount('#app');