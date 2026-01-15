<template>
  <div id="app">
    <HeaderComp />
    <router-view />
    <FooterComp />
  </div>
</template>
<script setup>
import HeaderComp from './components/HeaderComp.vue';
import FooterComp from './components/FooterComp.vue';
</script>  