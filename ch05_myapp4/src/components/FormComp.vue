<template>
  <div class="card">
    <div class="card-content">
      <span class="card-title">글쓰기</span>
      <form @submit.prevent="submitForm">
        <div class="input-field">        <!-- 글 제목 입력란 -->
          <input id="title" type="text" v-model="title" required>
          <label for="title">글 제목</label>
        </div>
        <div class="input-field">  <!-- 글 내용 입력란 -->
          <textarea id="content" class="materialize-textarea" v-model="content" required></textarea>
          <label for="content">글 내용</label>
        </div>
        <div class="input-field">  <!-- 작성자 입력란 -->
          <input id="author" type="text" v-model="author" required>
          <label for="author">작성자</label>
        </div>
        <div class="input-field">        <!-- 버튼 -->
          <button class="btn waves-effect waves-light" type="submit">글쓰기
            <i class="material-icons right">send</i>
          </button>
          <button class="btn waves-effect waves-light grey lighten-1" type="button" @click="cancelForm">취소
            <i class="material-icons right">cancel</i>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import M from 'materialize-css';
const title = ref('');     // 입력 데이터
const content = ref('');
const author = ref('');
const submitForm = () => {  // 폼 제출 함수
  M.toast({html: `제목: ${title.value}<br>내용: ${content.value}<br>작성자: ${author.value}`, displayLength: 3000});
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
.card-title {
  font-size: 1.5rem;
  margin-bottom: 20px;
}
.btn {
  margin-right: 10px;
}
</style>    