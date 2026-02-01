<template>
    <div>
      <h2>Tasks</h2><hr/>
      <ul class="list-group">
        <li class="list-group-item" v-for="task in tasks" :key="task.id" style="min-height:14px">
          {{ task.name }}
        </li>
      </ul>
    </div>
  </template>
  <script setup>
  import { ref, onMounted } from 'vue'
  import useStore from '../store/index'
const store = useStore()
  const tasks = ref([])
    onMounted(async () => {
      try {
          const response = await store.getTasks()
          tasks.value = response
          console.log('Tasks:', response)
      } catch (error) {
          console.error('Error fetching tasks:', error)
      }
  })
  </script>
  