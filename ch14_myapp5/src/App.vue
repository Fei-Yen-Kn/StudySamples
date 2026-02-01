<template>
  <div>
    <NavbarComp />
    <router-view />
  </div>
</template>
<script setup>
import '@/assets/main.css'; // Custom CSS
import NavbarComp from '@/components/NavbarComp.vue';
</script>