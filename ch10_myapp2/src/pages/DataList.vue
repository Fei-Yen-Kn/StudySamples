<template>
    <div class="content">
      <h2 class="title">자료실 목록</h2>
      <table class="table is-fullwidth is-striped">
        <thead>
          <tr>
            <th>글번호</th><th>제목</th><th>작성자</th><th>조회수</th><th>등록일</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="data in paginatedData" :key="data.dno" @click="goToDetail(data.dno)" style="cursor: pointer;">
            <td>{{ data.dno }}</td><td>{{ data.title }}</td><td>{{ data.author }}</td>
            <td>{{ data.hits }}</td><td>{{ formatDate(data.resdate) }}</td>
          </tr>
        </tbody>
      </table>
      <div class="pagination">
        <button class="button" :disabled="currentPage === 1" @click="changePage(currentPage - 1)">이전</button>
        <button 
          v-for="page in totalPages" 
          :key="page" 
          class="button" 
          :class="{ 'is-current': currentPage === page }" 
          @click="changePage(page)">
          {{ page }}
        </button>
        <button class="button" :disabled="currentPage === totalPages" @click="changePage(currentPage + 1)">다음</button>
      </div>
  
      <button class="button is-link" @click="navigateToInsert">[자료 등록]</button>
    </div>
  </template>
  <script setup>
  import { ref, onMounted, computed } from 'vue';
  import { useProductStore } from '../store/productStore';
  import { useRouter } from 'vue-router';
  const productStore = useProductStore();
  const router = useRouter();
  const currentPage = ref(1);
  const itemsPerPage = 10;  // 페이지당 항목 수
  const dataList = computed(() => productStore.dataList);
  const paginatedData = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return dataList.value.slice(start, end);
  });
  const totalPages = computed(() => {
    return Math.ceil(dataList.value.length / itemsPerPage);
  });
  const fetchDataList = async () => {
    await productStore.fetchDataList();
  };
  const goToDetail = (dno) => {
    router.push({ name: 'DataDetail', params: { dno } });
  };
  const navigateToInsert = () => {
    router.push({ name: 'DataInsert' });
  };
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString();
  };
  const changePage = (page) => {
    if (page >= 1 && page <= totalPages.value) {
      currentPage.value = page;
    }
  };
  onMounted(() => {
    fetchDataList();
  });
  </script>
  <style scoped>
  table {
    margin-bottom: 1rem;
  }
  .pagination {
    display: flex;
    justify-content: center;
    margin: 1rem 0;
  }
  .button.is-current {
    font-weight: bold;
    background-color: #3273dc;
    color: white;
  }
  </style>