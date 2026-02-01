<template>
  <div class="grid-container">
    <div v-if="boardDetail" class="card">
      <div class="card-divider">
        <h2>{{ boardDetail.title }}</h2>
      </div>
      <div class="card-section">
        <p><strong>글 번호:</strong> {{ boardDetail.no }}</p>
        <p><strong>작성자:</strong> {{ boardDetail.author }}</p>
        <p>
          <strong>작성일:</strong>
          {{ new Date(boardDetail.resdate).toLocaleString() }}
        </p>
        <p><strong>조회수:</strong> {{ boardDetail.hits }}</p>
        <p><strong>내용:</strong></p>
        <p>{{ boardDetail.content }}</p>
      </div>
      <div class="button-group">
        <button @click="handleEdit" class="button">수정</button>
        <button @click="handleDelete" class="button alert">삭제</button>
      </div>
    </div>
    <div v-else>
      <p>게시물을 불러오는 중입니다...</p>
      <!-- 로딩 중 메시지 -->
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useMainStore } from "@/store";
import axios from "axios";

const mainStore = useMainStore();
const { fetchBoardDetail, boardDetail, deleteBoard } = mainStore;
const route = useRoute();
const router = useRouter();
onMounted(async () => {
  await fetchBoardDetail(route.params.no);
});
const handleEdit = () => {
  router.push(`/boards/edit/${route.params.no}`);
};
const handleDelete = async () => {
  const confirmDelete = confirm("정말 삭제하시겠습니까?");
  if (confirmDelete) {
    await deleteBoard(route.params.no); // 게시물 삭제
    router.push("/boards"); // 목록 페이지로 이동
  }
};
</script>
