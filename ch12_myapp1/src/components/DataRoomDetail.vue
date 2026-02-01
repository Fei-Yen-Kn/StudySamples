<template>
  <div class="grid-container">
    <h1>자료실 상세</h1>
    <hr />
    <h2>제목: {{ dataRoom.title }}</h2>
    <p>작성자: {{ dataRoom.author }}</p>
    <p style="font-weight: bold">내용</p>
    <p>{{ dataRoom.content }}</p>
    <p>
      <a :href="'/uploads/' + dataRoom.datafile" download>{{
        dataRoom.datafile
      }}</a>
    </p>
    <p>조회수: {{ dataRoom.hits }}</p>
    <button @click="goBack">목록으로 돌아가기</button>
    <button @click="editDataRoom">수정하기</button>
    <button @click="deleteDataRoom">삭제하기</button>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useMainStore } from "@/store";
const mainStore = useMainStore();
const { fetchDataRoomDetail, dataRoomDetail } = mainStore;
const route = useRoute();
const router = useRouter();
const dno = route.params.dno;
onMounted(() => fetchDataRoomDetail(dno));
const goBack = () => router.push({ name: "DataRoomList" });
const editDataRoom = () =>
  router.push({ name: "DataRoomEdit", params: { dno: dno } });
const deleteDataRoom = async () => {
  await mainStore.deleteDataRoom(dno);
  goBack();
};
</script>
