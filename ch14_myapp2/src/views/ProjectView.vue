<template>
  <div class="container mt-5">
    <h3>Project Details</h3><hr/>
    <div v-if="project">
      <h4>{{ project.name }}</h4>
      <p>{{ project.description }}</p>
      <router-link to="/projects" class="btn btn-secondary">Back to Projects</router-link> &nbsp; 
      <button @click="deleteProject" class="btn btn-danger ml-2" v-if="isAuthenticated">Delete Project</button>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import useStore from '../store/index'
import { useAuthStore } from '../store/authStore'
const authStore = useAuthStore()
const store = useStore()
const isAuthenticated = authStore.isAuthenticated
const project = ref({})
const route = useRoute()
const router = useRouter()
const projectId = route.params.id
onMounted(async () => {
  try {
    const response = await store.getProjectById(projectId)
    console.log('Fetched project:', response)  // 프로젝트 데이터를 확인
    if (response) {
      project.value = response
    } else {
      console.error(`No project found with ID: ${projectId}`)
    }
  } catch (error) {
    console.error('Error fetching project details:', error)
  }
})
const deleteProject = async () => {
  try {
    await store.deleteProject(projectId)
    alert('Project deleted successfully!')
    router.push('/projects')  // 프로젝트 목록 페이지로 리다이렉션
  } catch (error) {
    console.error('Error deleting project:', error)
  }
}
</script>