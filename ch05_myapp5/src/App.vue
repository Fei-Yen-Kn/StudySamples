<template>
  <div>
    <HeaderComp />
    <main>
      <CombineComp />
    </main>
    <footer class="footer has-background-dark has-text-white-ter">
      <div class="content has-text-centered">
        <p>&copy; 2024 My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>
<script setup>
import HeaderComp from './components/HeaderComp.vue';
import CombineComp from './components/CombineComp.vue';
</script>
<style>
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}
</style>  