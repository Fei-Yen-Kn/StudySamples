<template>
  <div class="grid-container">
    <h1>질문 및 답변 목록</h1>
    <hr />
    <button @click="goToInsert" class="button primary">질문하기</button>
    <table class="stack">
      <thead>
        <tr>
          <th>글 번호</th>
          <th>구분</th>
          <th>제목</th>
          <th>작성일</th>
          <th>조회수</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="question in paginatedQuestions" :key="question.qno">
          <td>{{ question.qno }}</td>
          <td>{{ question.lev === 1 ? "질문" : "답변" }}</td>
          <td>
            <router-link
              :to="{ name: 'QnADetail', params: { qno: question.qno } }"
              >{{ question.title }}</router-link
            >
          </td>
          <td>{{ new Date(question.resdate).toLocaleDateString() }}</td>
          <td>{{ question.hits }}</td>
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
const { fetchQuestions, questions } = mainStore;
const router = useRouter();
const currentPage = ref(1);
const pageSize = 5;
onMounted(fetchQuestions);
const paginatedQuestions = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  return questions.slice(start, start + pageSize);
});
const totalPages = computed(() => Math.ceil(questions.length / pageSize));
const changePage = (page) => {
  currentPage.value = page;
};
const goToInsert = () => {
  router.push({ name: "QnAInsert" });
};
</script>
