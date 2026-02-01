<template>
  <div class="card">
    <div class="card-divider">
      <h1>답변 등록</h1>
      <hr />
    </div>
    <div class="card-section">
      <form @submit.prevent="submitAnswer">
        <label>답변 제목</label><input v-model="title" required />
        <label>답변 내용</label
        ><textarea v-model="content" required></textarea> <label>작성자</label
        ><input v-model="author" required />
        <button type="submit" class="button primary">답변 등록</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useMainStore } from "@/store";
const mainStore = useMainStore();
const { insertAnswer } = mainStore;
const route = useRoute();
const router = useRouter();
const title = ref("");
const content = ref("");
const author = ref("");
const submitAnswer = async () => {
  await insertAnswer({
    title: title.value,
    content: content.value,
    author: author.value,
    parno: route.params.qno,
    lev: 2,
  });
  router.push({ name: "QnAList" });
};
</script>
