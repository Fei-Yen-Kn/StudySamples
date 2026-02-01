<template>
  <div id="app" class="container">
    <HeaderComp />
    <div style="border-bottom: 3px solid #333"></div>
    <section class="section">
      <router-view />
    </section>
    <FooterComp />
  </div>
</template>

<script setup>
import HeaderComp from "./components/HeaderComp.vue";
import FooterComp from "./components/FooterComp.vue";
</script>
