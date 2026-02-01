<template>
  <div class="grid-container">
    <div class="card">
      <div class="card-divider">
        <h1>질문 등록</h1>
        <hr />
      </div>
      <div class="card-section">
        <form @submit.prevent="submitQuestion">
          <label>제목</label><input type="text" v-model="title" required />
          <label>내용</label><textarea v-model="content" required></textarea>
          <label>작성자</label><input type="text" v-model="author" required />
          <button type="submit" class="button primary">등록</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useMainStore } from "@/store";
const mainStore = useMainStore();
const { insertQuestion } = mainStore;
const router = useRouter();
const title = ref("");
const content = ref("");
const author = ref("");
const submitQuestion = async () => {
  await insertQuestion({
    title: title.value,
    content: content.value,
    author: author.value,
    lev: 1,
  });
  router.push({ name: "QnAList" });
};
</script>
