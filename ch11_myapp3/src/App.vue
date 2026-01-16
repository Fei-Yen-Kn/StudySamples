<template>
  <div class="d-flex flex-column min-h-screen">
    <HeaderComp />
    <main class="flex-grow container">
      <router-view />
    </main>
    <FooterComp />
  </div>
</template>

<script setup>
import HeaderComp from "./components/HeaderComp.vue";
import FooterComp from "./components/FooterComp.vue";
</script>
s
