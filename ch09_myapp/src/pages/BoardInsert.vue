<template>
    <div class="board-insert">
      <h1>게시글 등록</h1>
      <form @submit.prevent="insertBoard" class="pure-form pure-form-aligned">
        <fieldset>
          <div class="pure-control-group">
            <label>제목:</label>
            <input v-model="board.title" required />
          </div>
          <div class="pure-control-group">
            <label>내용:</label>
            <textarea v-model="board.content" required></textarea>
          </div>
          <div class="pure-control-group">
            <label>작성자:</label>
            <input v-model="board.author" required />
          </div>
          <div class="pure-controls">
            <button type="submit" class="pure-button pure-button-primary">[글 등록]</button>
          </div>
        </fieldset>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const board = ref({
    title: '',
    content: '',
    author: ''
  });
  
  const insertBoard = () => {
    fetch('http://localhost:8081/boards/insert', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(board.value)
    })
      .then(() => {
        router.push('/boards');
      })
      .catch(error => {
        console.error('Error inserting board:', error);
      });
  };
  </script>
  
  <style scoped>
  .board-insert {
    padding: 1rem;
  }
  
  h1 {
    color: #333;
    margin-bottom: 1rem;
  }
  
  .pure-form-aligned .pure-control-group label {
    width: 80px;
    text-align: right;
    margin-right: 10px;
  }
  
  .pure-control-group input,
  .pure-control-group textarea {
    width: 100%;
    max-width: 400px;
  }
  
  .pure-controls {
    margin-top: 1rem;
  }
  
  .pure-button-primary {
    background-color: #1f8dd6;
    color: white;
  }
  </style>