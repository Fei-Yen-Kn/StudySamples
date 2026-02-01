<template>
  <div class="container mt-5" v-if="isAuthenticated">
    <h3>Posts</h3>
    <div v-for="post in posts" :key="post.id">
      <div v-if="post">
        <h4>{{ post.title }}</h4>
        <p>{{ post.content }}</p>
        <router-link to="/boards" class="btn btn-secondary">Back to Boards</router-link>
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import useStore from '../store/index'
import { useAuthStore } from '../store/authStore'
const authStore = useAuthStore()
const store = useStore()
const isAuthenticated = authStore.isAuthenticated
const posts = ref({})
const route = useRoute()
onMounted(async () => {
  try {
    const response = await store.getBoard(route.params.id)
    posts.value = response
  } catch (error) {
    console.error('Error fetching board details:', error)
  }
})
</script>