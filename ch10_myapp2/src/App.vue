<template>
  <div>
    <HeaderComp />
    <section class="section">
      <div class="container">
        <router-view />
      </div>
    </section>
    <FooterComp />
  </div>
</template>
<script setup>
import HeaderComp from './components/HeaderComp.vue';
import FooterComp from './components/FooterComp.vue';
</script>  