<template>
  <div class="box">
    <h2 class="title is-4">글쓰기</h2>
    <form @submit.prevent="submitForm">
      <div class="field">
        <label class="label" for="title">글 제목</label>
        <div class="control">
          <input class="input" type="text" id="title" v-model="title" placeholder="글 제목을 입력하세요" required>
        </div>
      </div>
      <div class="field">
        <label class="label" for="content">글 내용</label>
        <div class="control">
          <textarea class="textarea" id="content" v-model="content" placeholder="글 내용을 입력하세요" required></textarea>
        </div>
      </div>
      <div class="field">
        <label class="label" for="author">작성자</label>
        <div class="control">
          <input class="input" type="text" id="author" v-model="author" placeholder="작성자를 입력하세요" required>
        </div>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link" type="submit">글쓰기</button>
        </div>
        <div class="control">
          <button class="button is-light" type="button" @click="cancelForm">취소</button>
        </div>
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
const cancelForm = () => {  // 폼 취소 함수
  if (confirm('작성을 취소하시겠습니까?')) {
    title.value = '';
    content.value = '';
    author.value = '';
  }
};
</script>
<style scoped>
.box {
  max-width: 600px;
  margin: 0 auto;
}
</style>    