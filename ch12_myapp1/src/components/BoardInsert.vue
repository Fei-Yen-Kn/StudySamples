<template>
  <div class="grid-container">
    <h2>공지사항 작성</h2>
    <hr />
    <form @submit.prevent="handleSubmit">
      <label>제목</label><input type="text" v-model="title" required />
      <label>내용</label><textarea v-model="content" required></textarea>
      <label>작성자</label><input type="text" v-model="author" required />
      <button type="submit">등록</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useMainStore } from "@/store";

const mainStore = useMainStore();
const { insertBoard } = mainStore;
const title = ref("");
const content = ref("");
const author = ref("");
const router = useRouter();
const handleSubmit = async () => {
  await insertBoard({
    title: title.value,
    content: content.value,
    author: author.value,
  });
  router.push("/boards");
};
</script>
