<template>
    <div class="board-list pure-g">
      <div class="pure-u-1">
        <h1>게시판 목록</h1>
        <ul class="pure-menu-list">
          <li class="pure-menu-item" v-for="board in boards" :key="board.no">
            <router-link class="pure-menu-link" :to="'/boards/detail/' + board.no">{{ board.title }}</router-link>
          </li>
        </ul>
        <router-link to="/boards/insert" class="pure-button pure-button-primary">[글등록]</router-link>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const boards = ref([]);
  
  const fetchBoards = () => {
    return new Promise((resolve, reject) => {
      fetch('http://localhost:8081/boards/list')
        .then(response => {
          if (!response.ok) throw new Error('Network response was not ok');
          return response.json();
        })
        .then(data => {
          boards.value = data;
          resolve(data);
        })
        .catch(error => {
          console.error('Error fetching boards:', error);
          reject(error);
        });
    });
  };
  
  onMounted(fetchBoards);
  </script>
  
  <style scoped>
  .board-list {
    padding: 1rem;
  }
  
  h1 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 1rem;
  }
  
  .pure-menu-list {
    list-style: none;
    padding: 0;
  }
  
  .pure-menu-item {
    margin: 0.5rem 0;
  }
  
  .pure-button-primary {
    margin-top: 1rem;
  }
  </style>