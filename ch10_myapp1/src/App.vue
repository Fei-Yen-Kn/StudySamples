<template>
  <div>
    <HeaderComp />
    <main class="grid-container">
      <router-view />
    </main>
    <FooterComp />
  </div>
</template>
<script setup>
import HeaderComp from './components/HeaderComp.vue';
import FooterComp from './components/FooterComp.vue';
</script>  