import { createRouter, createWebHistory } from 'vue-router';
// 페이지 컴포넌트 임포트
import MainComp from '../pages/MainComp.vue';
import ProductList from '../pages/ProductList.vue';
import ProductInsert from '../pages/ProductInsert.vue';
import ProductDetail from '../pages/ProductDetail.vue';
import ProductEdit from '../pages/ProductEdit.vue';
const routes = [
  { path: '/', name: 'Main', component: MainComp },
  { path: '/products', name: 'ProductList', component: ProductList },
  { path: '/products/insert', name: 'ProductInsert', component: ProductInsert },
  { path: '/products/detail/:pno', name: 'ProductDetail', component: ProductDetail, props: true },
  { path: '/products/edit/:pno', name: 'ProductEdit', component: ProductEdit, props: true },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;