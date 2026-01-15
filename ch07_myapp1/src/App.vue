<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="bg-white p-6 rounded shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold mb-4 text-center">Todo List</h1>
      <Home />
    </div>
  </div>
</template>
<script setup>
import Home from './views/HomeView.vue';
</script>