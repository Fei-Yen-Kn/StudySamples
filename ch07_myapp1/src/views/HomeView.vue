<template>
  <div>
    <div class="flex mb-4">
      <input
        v-model="newTodo"
        @keyup.enter="addTodo"
        type="text"
        placeholder="새로운 Todo를 입력하세요"
        class="flex-grow p-2 border rounded-l"
      />
      <button @click="addTodo" class="bg-blue-500 text-white p-2 rounded-r">
        추가
      </button>
    </div>
    <ul>
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @remove="removeTodo"
      />
    </ul>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import TodoItem from '../components/TodoItem.vue';
const newTodo = ref('');
const todos = ref([]);
const addTodo = () => {
  if (newTodo.value.trim() === '') return;
  todos.value.push({
    id: Date.now(),
    text: newTodo.value.trim(),
  });
  newTodo.value = '';
};
const removeTodo = (id) => {
  todos.value = todos.value.filter((todo) => todo.id !== id);
};
</script>  