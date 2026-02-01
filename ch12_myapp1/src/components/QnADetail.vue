<template>
  <div class="grid-container">
    <div class="card">
      <div class="card-divider">
        <h1>{{ questionDetail.title }}</h1>
        <hr />
      </div>
      <div class="card-section">
        <p><strong>작성자:</strong> {{ questionDetail.author }}</p>
        <p>
          <strong>작성일:</strong>
          {{ new Date(questionDetail.resdate).toLocaleString() }}
        </p>
        <p><strong>조회수:</strong> {{ questionDetail.hits }}</p>
        <p>{{ questionDetail.content }}</p>
      </div>
      <div class="button-group">
        <button @click="goToEdit" class="button primary">수정</button>
        <button @click="handleDelete" class="button alert">삭제</button>
        <button
          v-if="questionDetail.lev === 1"
          @click="goToAnswer"
          class="button secondary"
        >
          답변
        </button>
        <button @click="goToList" class="button">목록</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useMainStore } from "@/store";
const mainStore = useMainStore();
const { fetchQuestionDetail, questionDetail, deleteQuestion } = mainStore;
const route = useRoute();
const router = useRouter();
onMounted(() => fetchQuestionDetail(route.params.qno));
const goToEdit = () => {
  router.push({ name: "QnAEdit", params: { qno: route.params.qno } });
};
const goToAnswer = () => {
  router.push({ name: "AnswerInsert", params: { qno: route.params.qno } });
};
const goToList = () => {
  router.push({ name: "QnAList" });
};
const handleDelete = async () => {
  if (confirm("정말 삭제하시겠습니까?")) {
    await deleteQuestion(route.params.qno);
    router.push({ name: "QnAList" });
  }
};
</script>
