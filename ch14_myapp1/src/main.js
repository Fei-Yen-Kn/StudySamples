import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import "bulma/css/bulma.css";
import { useAuthStore } from "./store/auth";

const app = createApp(App);
app.use(createPinia());
app.use(router);

const authStore = useAuthStore();
authStore.initialize();
app.mount("#app");
