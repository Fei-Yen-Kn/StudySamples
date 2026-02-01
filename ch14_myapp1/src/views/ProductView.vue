<template>
  <div class="container" v-if="product.name">
    <h3 class="title">{{ product.name }}</h3>
    <hr />
    <p>{{ product.description }}</p>
    <p class="subtitle">{{ product.price }} 원</p>
    <button class="button is-primary" @click="goToPurchase">구매하기</button>
  </div>
  <div v-else>
    <p>제품 정보를 불러오는 중입니다...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import ProductService from "../services/ProductService";

const route = useRoute();
const router = useRouter();
const product = ref({});
const productId = ref(route.params.id);
console.log(productId.value);

async function fetchProduct() {
  try {
    product.value = await ProductService.getProductDetail(productId.value);
    console.log(product.value);
  } catch (error) {
    console.error("제품 정보 불러오기 실패", error);
  }
}
function goToPurchase() {
  router.push({ name: "SaleView", params: { id: product.value.id } });
}
onMounted(() => {
  productId.value = route.params.id;
  fetchProduct();
});
</script>
