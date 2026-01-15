import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bulma/css/bulma.css'; // Bulma CSS 임포트

createApp(App)
  .use(router)
  .use(store)
  .mount('#app');