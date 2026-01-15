<template>
  <div class="flex flex-col min-h-screen">
    <HeaderComp />
    <main class="flex-grow">
      <MainComp />
    </main>
    <footer class="bg-gray-800 text-white py-4">
      <div class="container mx-auto px-4 text-center">
        © 2024 StartupApp. All rights reserved.
      </div>
    </footer>
  </div>
</template>
<script setup>
import HeaderComp from './components/HeaderComp.vue';
import MainComp from './components/MainComp.vue';
</script>
<style>
body {
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
}
</style>  