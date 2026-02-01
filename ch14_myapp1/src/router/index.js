import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import CartView from "../views/CartView.vue";
import ProductView from "../views/ProductView.vue";
import SaleView from "../views/SaleView.vue";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/login", name: "Login", component: LoginView },
  { path: "/register", name: "Register", component: RegisterView },
  { path: "/cart", name: "Cart", component: CartView },
  { path: "/product/:id", name: "ProductView", component: ProductView },
  { path: "/purchase/:id", name: "SaleView", component: SaleView, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
