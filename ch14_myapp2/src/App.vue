<template>
  <div>
    <HeaderComp />
    <div class="content" style="padding:2rem">
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup>
import HeaderComp from './components/HeaderComp.vue'
</script>