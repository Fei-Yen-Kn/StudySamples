<template>
  <div class="grid-container">
    <h1>자료 등록</h1>
    <hr />
    <form @submit.prevent="submitDataRoom">
      <label>제목:</label><input type="text" v-model="title" required />
      <label>내용:</label><textarea v-model="content" required></textarea>
      <label>작성자:</label><input type="text" v-model="author" required />
      <label>파일:</label><input type="file" @change="handleFileUpload" />
      <button type="submit">등록하기</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useMainStore } from "@/store";
const title = ref("");
const content = ref("");
const author = ref("");
const datafile = ref(null);
const router = useRouter();
const mainStore = useMainStore();
const handleFileUpload = (event) => (datafile.value = event.target.files[0]);
const submitDataRoom = async () => {
  const formData = new FormData();
  formData.append("title", title.value);
  formData.append("content", content.value);
  formData.append("author", author.value);
  formData.append("datafile", datafile.value);
  await mainStore.createDataRoom(formData);
  router.push({ name: "DataRoomList" });
};
</script>
