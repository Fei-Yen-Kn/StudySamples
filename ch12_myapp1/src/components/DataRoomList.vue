<template>
  <div class="grid-container">
    <h1>자료실 목록</h1>
    <hr />
    <button @click="createDataRoom" class="button primary">
      자료 등록하기
    </button>
    <table class="stack">
      <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일</th>
          <th>조회수</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in paginatedDataRoomList"
          :key="item.dno"
          @click="viewDetail(item.dno)"
        >
          <td>{{ item.dno }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.author }}</td>
          <td>{{ new Date(item.resdate).toLocaleDateString() }}</td>
          <td>{{ item.hits }}</td>
        </tr>
      </tbody>
    </table>
    <ul
      class="pagination text-center"
      role="navigation"
      aria-label="Pagination"
    >
      <li v-if="currentPage > 1" class="pagination-previous">
        <a @click="changePage(currentPage - 1)">Previous</a>
      </li>
      <li
        v-for="page in totalPages"
        :key="page"
        :class="{ current: page === currentPage }"
      >
        <a @click="changePage(page)">{{ page }}</a>
      </li>
      <li v-if="currentPage < totalPages" class="pagination-next">
        <a @click="changePage(currentPage + 1)">Next</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useMainStore } from "@/store";
const mainStore = useMainStore();
const { fetchDataRoomList, dataRoomList } = mainStore;
const currentPage = ref(1);
const pageSize = 5;
onMounted(fetchDataRoomList);
const paginatedDataRoomList = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  return dataRoomList.slice(start, start + pageSize);
});
const totalPages = computed(() => Math.ceil(dataRoomList.length / pageSize));
const changePage = (page) => {
  currentPage.value = page;
};
const router = useRouter();
const viewDetail = (dno) =>
  router.push({ name: "DataRoomDetail", params: { id: dno } });
const createDataRoom = () => router.push({ name: "CreateDataRoom" });
</script>
