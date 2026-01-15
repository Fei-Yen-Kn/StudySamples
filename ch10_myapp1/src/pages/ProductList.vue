<template>
  <div class="grid-container">
    <h2>상품 목록</h2>
    <table class="hover">
      <thead>
        <tr>
          <th>상품번호</th><th>상품명</th><th>조회수</th><th>등록일</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in paginatedProducts" :key="product.pno" @click="goToDetail(product.pno)" style="cursor: pointer;">
          <td>{{ product.pno }}</td><td>{{ product.pname }}</td>
          <td>{{ product.hits }}</td><td>{{ formatDate(product.resdate) }}</td>
        </tr>
      </tbody>
    </table>
    <div class="pagination">
      <button class="button" :disabled="currentPage === 1" @click="changePage(currentPage - 1)">Previous</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button class="button" :disabled="currentPage === totalPages" @click="changePage(currentPage + 1)">Next</button>
    </div>
    <button class="button" @click="navigateToInsert">[상품 등록]</button>
  </div>
</template>
<script setup>
import { onMounted, ref, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
const store = useStore();
const router = useRouter();
const products = store.state.products;
const currentPage = ref(1);
const itemsPerPage = 10; // 한 페이지에 표시할 상품 수
const paginatedProducts = computed(() => {  // 현재 페이지에 해당하는 상품 목록 계산
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return products.slice(start, end);
});
const totalPages = computed(() => {  // 전체 페이지 수 계산
  return Math.ceil(products.length / itemsPerPage);
});
const fetchProducts = async () => {  // 상품 목록 불러오기
  await store.dispatch('fetchProducts');
};
const goToDetail = (pno) => {  // 상품 상세 페이지로 이동
  router.push({ name: 'ProductDetail', params: { pno } });
};
const navigateToInsert = () => {  // 상품 등록 페이지로 이동
  router.push({ name: 'ProductInsert' });
};
const formatDate = (dateStr) => {  // 날짜 형식 변환
  const date = new Date(dateStr);
  return date.toLocaleDateString();
};
const changePage = (page) => {  // 페이지 변경
  if (page > 0 && page <= totalPages.value) {
    currentPage.value = page;
  }
};
onMounted(() => {  // 컴포넌트 마운트 시 상품 목록 불러오기
  fetchProducts();
});
</script>
<style scoped>
table {
  width: 100%;
  margin-bottom: 1rem;
}
.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
}
</style>
