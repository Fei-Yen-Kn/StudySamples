import { createRouter, createWebHistory } from "vue-router";
import HomeComp from "../components/HomeComp.vue";
import BoardList from "../components/BoardList.vue";
import BoardDetail from "../components/BoardDetail.vue";
import BoardInsert from "../components/BoardInsert.vue";
import BoardEdit from "../components/BoardEdit.vue";
import QnAList from "../components/QnAList.vue";
import QnADetail from "../components/QnADetail.vue";
import QnAInsert from "../components/QnAInsert.vue";
import QnAEdit from "../components/QnAEdit.vue";
import AnswerInsert from "../components/AnswerInsert.vue";
/*import DataRoomList from "../components/DataRoomList.vue";
import DataRoomDetail from "../components/DataRoomDetail.vue";
import CreateDataRoom from "../components/CreateDataRoom.vue";
import DataRoomEdit from "../components/DataRoomEdit.vue";
import ProductList from "../components/ProductList.vue";
import ProductDetail from "../components/ProductDetail.vue";
import CreateProduct from "../components/CreateProduct.vue";
import ProductEdit from "../components/ProductEdit.vue";
import ChatBot from "../components/ChatBot.vue";*/

const routes = [
  { path: "/", component: HomeComp },
  { path: "/boards", component: BoardList },
  { path: "/boards/list", name: "BoardList", component: BoardList },
  { path: "/boards/detail/:no", name: "BoardDetail", component: BoardDetail },
  { path: "/boards/insert", name: "BoardInsert", component: BoardInsert },
  { path: "/boards/edit/:no", name: "BoardEdit", component: BoardEdit },
  { path: "/qna", component: QnAList },
  { path: "/qna/list", name: "QnAList", component: QnAList },
  { path: "/qna/detail/:qno", name: "QnADetail", component: QnADetail },
  { path: "/qna/insert", name: "QnAInsert", component: QnAInsert },
  { path: "/qna/edit/:qno", name: "QnAEdit", component: QnAEdit },
  { path: "/qna/answer/:qno", name: "AnswerInsert", component: AnswerInsert },
  /*{ path: "/dataroom", component: DataRoomList },
  { path: "/dataroom/list", name: "DataRoomList", component: DataRoomList },
  { path: "/dataroom/:dno", name: "DataRoomDetail", component: DataRoomDetail },
  {
    path: "/dataroom/create",
    name: "CreateDataRoom",
    component: CreateDataRoom,
  },
  {
    path: "/dataroom/edit/:dno",
    name: "DataRoomEdit",
    component: DataRoomEdit,
  },
  { path: "/products", component: ProductList },
  { path: "/products/list", name: "ProductList", component: ProductList },
  { path: "/products/:pno", name: "ProductDetail", component: ProductDetail },
  { path: "/products/create", name: "CreateProduct", component: CreateProduct },
  { path: "/products/edit/:pno", name: "ProductEdit", component: ProductEdit },
  { path: "/chatbot", component: ChatBot },*/
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
