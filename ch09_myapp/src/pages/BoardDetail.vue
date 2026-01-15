<template>
    <div class="board-detail pure-g">
      <div class="pure-u-1">
        <h1>게시글 상세보기</h1>
        <div v-if="board" class="board-content">
          <h2>{{ board.title }}</h2>
          <p><strong>작성자:</strong> {{ board.author }}</p>
          <p><strong>작성일시:</strong> {{ board.resdate }}</p>
          <p><strong>조회수:</strong> {{ board.visited }}</p>
          <p>{{ board.content }}</p>
          <div class="button-group">
            <button @click="deleteBoard" class="pure-button pure-button-error">[글 삭제]</button>
            <router-link :to="'/boards/edit/' + board.no" class="pure-button pure-button-primary">[글 수정]</router-link>
            <router-link to="/boards" class="pure-button">[글 목록]</router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  
  const route = useRoute();
  const router = useRouter();
  const board = ref(null);
  
  const fetchBoard = () => {
    fetch(`http://localhost:8081/boards/detail/${route.params.no}`)
      .then(response => response.json())
      .then(data => {
        board.value = data;
      })
      .catch(error => {
        console.error('Error fetching board:', error);
      });
  };
  
  const deleteBoard = () => {
    fetch(`http://localhost:8081/boards/delete/${board.value.no}`, {
      method: 'DELETE'
    })
      .then(() => {
        router.push('/boards');
      })
      .catch(error => {
        console.error('Error deleting board:', error);
      });
  };
  
  onMounted(fetchBoard);
  </script>
  
  <style scoped>
  .board-detail {
    padding: 1rem;
  }
  
  h1, h2 {
    color: #333;
  }
  
  .board-content {
    border: 1px solid #ddd;
    padding: 1rem;
    border-radius: 4px;
    background-color: #fafafa;
  }
  
  p {
    margin: 0.5rem 0;
  }
  
  .button-group {
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
  }
  
  .pure-button-error {
    background-color: #e74c3c;
    color: white;
  }
  </style>