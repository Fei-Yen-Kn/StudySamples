import { createRouter, createWebHistory } from "vue-router";
import MovieComp from "../pages/MovieComp.vue";
import ReviewList from "../pages/ReviewList.vue";
import MovieList from "../pages/MovieList.vue";
import MovieDetail from "../pages/MovieDetail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: MovieComp,
  },
  {
    path: "/reviews",
    name: "ReviewList",
    component: ReviewList,
  },
  {
    path: "/movies",
    name: "MovieList",
    component: MovieList,
  },
  {
    path: "/movies/:id",
    name: "MovieDetail",
    component: MovieDetail,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
