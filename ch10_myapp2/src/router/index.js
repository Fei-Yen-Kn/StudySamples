import { createRouter, createWebHistory } from 'vue-router';
import MainComp from '../pages/MainComp.vue';
import DataList from '../pages/DataList.vue';
import DataInsert from '../pages/DataInsert.vue';
import DataDetail from '../pages/DataDetail.vue';
import DataEdit from '../pages/DataEdit.vue';
const routes = [
  { path: '/', name: 'Main', component: MainComp },
  { path: '/datalist', name: 'DataList', component: DataList },
  { path: '/datainsert', name: 'DataInsert', component: DataInsert },
  { path: '/datadetail/:dno', name: 'DataDetail', component: DataDetail, props: true },
  { path: '/dataedit/:dno', name: 'DataEdit', component: DataEdit, props: true },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;