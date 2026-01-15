import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import 'bulma/css/bulma.css'; // Bulma CSS 임포트

const app = createApp(App);
app.use(store);
app.use(router);

// 세션 스토리지에서 자동 로그인 처리
store.dispatch('autoLogin');

app.mount('#app');