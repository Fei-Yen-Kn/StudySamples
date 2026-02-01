<template>
  <div class="grid-container">
    <h2>공지사항 목록</h2>
    <hr />
    <div class="text-right" style="margin-bottom: 1rem">
      <router-link to="/boards/insert" class="button primary"
        >글 작성하기</router-link
      >
    </div>
    <table class="stack">
      <thead>
        <tr>
          <th>글 번호</th>
          <th>제목</th>
          <th>작성일</th>
          <th>작성자</th>
          <th>조회수</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="board in paginatedBoards" :key="board.no">
          <td>{{ board.no }}</td>
          <td>
            <router-link :to="'/boards/detail/' + board.no">{{
              board.title
            }}</router-link>
          </td>
          <td>{{ new Date(board.resdate).toLocaleDateString() }}</td>
          <td>{{ board.author }}</td>
          <td>{{ board.hits }}</td>
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
import { useMainStore } from "@/store";
const mainStore = useMainStore();
const { fetchBoards, boards } = mainStore;
const currentPage = ref(1);
const pageSize = 5;
onMounted(fetchBoards);
const paginatedBoards = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  return boards.slice(start, start + pageSize);
});
const totalPages = computed(() => Math.ceil(boards.length / pageSize));
const changePage = (page) => {
  currentPage.value = page;
};
</script>
