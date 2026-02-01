<template>
    <div class="not-found">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <router-link to="/" class="button">메인으로</router-link>
    </div>
</template>
<script setup>
</script>
<style scoped>
.not-found {
    text-align: center;
    padding: 50px;
}
</style>