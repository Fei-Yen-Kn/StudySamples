<template>
  <div class="flex flex-col min-h-screen">
    <HeaderComp />
    <main class="flex-grow container mx-auto p-4">
      <router-view />
    </main>
    <FooterComp />
  </div>
</template>

<script setup>
import HeaderComp from "./components/HeaderComp.vue";
import FooterComp from "./components/FooterComp.vue";
</script>
