<template>
  <div class="bg-white p-6 rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-4">글쓰기</h2>
    <form @submit.prevent="submitForm">
      <div class="mb-4">
        <label for="title" class="block text-gray-700">글 제목</label>
        <input type="text" id="title" v-model="title" required class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
      </div>
      <div class="mb-4">
        <label for="content" class="block text-gray-700">글 내용</label>
        <textarea id="content" v-model="content" rows="5" required class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
      </div>
      <div class="mb-4">
        <label for="author" class="block text-gray-700">작성자</label>
        <input type="text" id="author" v-model="author" required class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
      </div>
      <div class="flex justify-end">
        <button type="submit" class="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mr-4">글쓰기</button>
        <button type="button" @click="cancelForm" class="px-6 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400">취소</button>
      </div>
    </form>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const title = ref('');  // 입력 데이터
const content = ref('');
const author = ref('');
const submitForm = () => {  // 폼 제출 함수
  alert(`제목: ${title.value}\n내용: ${content.value}\n작성자: ${author.value}`);
  title.value = '';    // 폼 초기화
  content.value = '';
  author.value = '';
};
const cancelForm = () => {   // 폼 취소 함수
  if (confirm('작성을 취소하시겠습니까?')) {
    title.value = '';
    content.value = '';
    author.value = '';
  }
};
</script>    