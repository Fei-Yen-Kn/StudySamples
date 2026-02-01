import "foundation-sites/dist/css/foundation.min.css";
import "foundation-sites/dist/js/foundation.min.js";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import { useMainStore } from "@/store";

const app = createApp(App);
app.use(createPinia());
const mainStore = useMainStore(); // 스토어 초기화
mainStore.initStore(); // 데이터 초기화 호출
app.use(router).mount("#app");
