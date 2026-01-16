import { createRouter, createWebHistory } from "vue-router";
import MainComp from "../pages/MainComp.vue";
import WeatherList from "../pages/WeatherList.vue";
import WeatherDetail from "../pages/WeatherDetail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: MainComp,
  },
  {
    path: "/weather",
    name: "WeatherList",
    component: WeatherList,
  },
  {
    path: "/weather/:id",
    name: "WeatherDetail",
    component: WeatherDetail,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
