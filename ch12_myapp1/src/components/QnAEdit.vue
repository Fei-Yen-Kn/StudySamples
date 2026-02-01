<template>
  <div class="grid-container">
    <div class="card">
      <div class="card-divider">
        <h1>질문 수정</h1>
        <hr />
      </div>
      <div class="card-section">
        <form @submit.prevent="updateQuestion">
          <label>제목</label><input v-model="title" required />
          <label>내용</label><textarea v-model="content" required></textarea>
          <label>작성자</label><input v-model="author" required />
          <button type="submit" class="button primary">수정 완료</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useMainStore } from "@/store";
const mainStore = useMainStore();
const { fetchQuestionDetail } = mainStore;
const route = useRoute();
const router = useRouter();
const title = ref("");
const content = ref("");
const author = ref("");
onMounted(async () => {
  await fetchQuestionDetail(route.params.id);
  title.value = mainStore.questionDetail.title;
  content.value = mainStore.questionDetail.content;
  author.value = mainStore.questionDetail.author;
});
const updateQuestion = async () => {
  await updateQuestion(route.params.id, {
    title: title.value,
    content: content.value,
    author: author.value,
  });
  router.push({ name: "QnADetail", params: { id: route.params.id } });
};
</script>
