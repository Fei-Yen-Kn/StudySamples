import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css'; // Tailwind CSS
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const app = createApp(App);
app.mount('#app');