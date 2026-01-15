<template>
    <div class="board-edit">
      <h1>게시글 수정</h1>
      <form @submit.prevent="updateBoard" class="pure-form pure-form-aligned">
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
            <button type="submit" class="pure-button pure-button-primary">[글 수정]</button>
            <router-link to="/boards" class="pure-button">[글 목록]</router-link>
          </div>
        </fieldset>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  
  const route = useRoute();
  const router = useRouter();
  const board = ref({});
  
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
  
  const updateBoard = () => {
    fetch(`http://localhost:8081/boards/update/${board.value.no}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(board.value)
    })
      .then(() => {
        router.push('/boards');
      })
      .catch(error => {
        console.error('Error updating board:', error);
      });
  };
  
  onMounted(fetchBoard);
  </script>
  
  <style scoped>
  .board-edit {
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
    margin-right: 10px;
  }
  
  .pure-button {
    color: #333;
    border: 1px solid #ccc;
    padding: 0.5rem 1rem;
    text-decoration: none;
  }
  </style>