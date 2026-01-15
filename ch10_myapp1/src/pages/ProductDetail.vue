<template>
  <div class="grid-container">
    <h2>상품 상세 정보</h2>
    <div v-if="product">
      <p><strong>상품번호:</strong> {{ product.pno }}</p>
      <p><strong>상품명:</strong> {{ product.pname }}</p>
      <p><strong>상품내용:</strong> {{ product.pcontent }}</p>
      <p><strong>등록일시:</strong> {{ formatDate(product.resdate) }}</p>
      <p><strong>조회수:</strong> {{ product.hits }}</p>
      <div class="grid-x grid-padding-x">
        <div class="medium-4 cell" v-for="(img, index) in product.images" :key="index">
          <img :src="img" alt="상품 이미지" style="width: 100%;" />
        </div>
      </div>
      <button class="button" @click="editProduct">[상품 정보 수정]</button>
      <button class="button alert" @click="deleteProduct">[상품 정보 삭제]</button>
      <button class="button" @click="goToList">[상품목록]</button>
    </div>
    <div v-else>
      <p>상품을 불러오는 중입니다...</p>
    </div>
  </div>
</template>
<script setup>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';
const store = useStore();
const router = useRouter();
const route = useRoute();
const pno = route.params.pno;
const product = computed(() => store.state.currentProduct);
const fetchProduct = async () => {
  await store.dispatch('fetchProductDetail', pno);
};
const editProduct = () => {
  router.push({ name: 'ProductEdit', params: { pno } });
};
const deleteProduct = async () => {
  if (confirm('정말로 이 상품을 삭제하시겠습니까?')) {
    await store.dispatch('deleteProduct', pno);
    router.push({ name: 'ProductList' });
  }
};
const goToList = () => {
  router.push({ name: 'ProductList' });
};
const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleString();
};
onMounted(() => {
  fetchProduct();
});
</script>
<style scoped>
img {
  margin-bottom: 1rem;
}
button {
  margin-right: 0.5rem;
}
</style>    