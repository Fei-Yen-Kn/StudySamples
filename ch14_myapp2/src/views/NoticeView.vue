<template>
  <div class="container mt-5">
    <h3>Notice Details</h3><hr/>
    <div v-if="notice">
      <h4>{{ notice.title }}</h4>
      <p>{{ notice.content }}</p>
      
      <!-- 삭제 버튼 추가 -->
      <button @click="deleteNotice" class="btn btn-danger" v-if="isAuthenticated">삭제</button>
      &nbsp;
      <!-- 뒤로가기 버튼 -->
      <router-link to="/notices" class="btn btn-secondary">Back to Notices</router-link>
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
const notice = ref(null)
const route = useRoute()
const router = useRouter()
const noticeId = route.params.id
onMounted(async () => {
  console.log(noticeId)  
  try {
    const response = await store.getNoticeById(noticeId)  // getNoticeById로 수정 필요
    notice.value = response
  } catch (error) {
    console.error('Error fetching notice details:', error)
  }
})
const deleteNotice = async () => {
  try {
    await store.deleteNotice(notice.value.id)  // 'storee'를 'store'로 수정
    alert('Notice deleted successfully')
    router.push('/notices')  // 삭제 후 공지사항 목록으로 이동
  } catch (error) {
    console.error('Error deleting notice:', error)
  }
}
</script>