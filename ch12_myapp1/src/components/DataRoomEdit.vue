<template>
  <div class="grid-container">
    <h1>자료 수정</h1>
    <hr />
    <form @submit.prevent="submitEdit">
      <label>제목:</label
      ><input type="text" v-model="dataRoom.title" required />
      <label>내용:</label
      ><textarea v-model="dataRoom.content" required></textarea>
      <label>작성자:</label
      ><input type="text" v-model="dataRoom.author" required />
      <label>파일:</label><input type="file" @change="handleFileUpload" />
      <button type="submit">수정하기</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useMainStore } from "@/store";
const mainStore = useMainStore();
const route = useRoute();
const router = useRouter();
const dataRoom = ref({});
const datafile = ref(null);
onMounted(() => {
  mainStore.fetchDataRoomDetail(route.params.id);
  dataRoom.value = mainStore.dataRoomDetail;
});
const handleFileUpload = (event) => (datafile.value = event.target.files[0]);
const submitEdit = async () => {
  const formData = new FormData();
  formData.append("title", dataRoom.value.title);
  formData.append("content", dataRoom.value.content);
  formData.append("author", dataRoom.value.author);
  formData.append("datafile", datafile.value);
  await mainStore.updateDataRoom(route.params.id, formData);
  router.push({ name: "DataRoomList" });
};
</script>
