<template>
  <div class="pure-g">
    <div v-if="isLoading" class="pure-u-1">
      <p>공지사항을 불러오는 중입니다...</p>
    </div>
    <div v-else class="pure-u-1">
      <h1>{{ noti.title }}</h1>
      <p><strong>내용:</strong> {{ noti.content }}</p>
      <p><strong>조회수:</strong> {{ noti.hits }}</p>
      <p><strong>최초 작성:</strong> {{ noti.created_at }}</p>
      <p><strong>최종 수정:</strong> {{ noti.updated_at }}</p>
      
      <router-link to="/notices" class="pure-button">목록으로</router-link>
      <span v-if="isAuthenticated">
        <router-link v-if="user.role === 'ADMIN'" :to="`/notices/edit/${noti.id}`" class="pure-button pure-button-primary">수정</router-link>
        <button v-if="user.role === 'ADMIN'" @click="deleteNotice" class="pure-button pure-button-error">삭제</button>
      </span>
    </div>
  </div>
</template>

<script setup>
import { useNoticeStore } from '../store/useNoticeStore';
import { onMounted, ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAuthStore } from '../store/useAuthStore'; // 사용자 인증 스토어
const route = useRoute();
const router = useRouter();
const noticeStore = useNoticeStore();
const authStore = useAuthStore(); // 현재 사용자 정보 가져오기
const isLoading = ref(true);
const noti = ref({}); // 초기값을 빈 객체로 설정하여 안전하게 접근 가능

onMounted(async () => {
  try {
    const username = localStorage.getItem('username');
    if (username) {
      await authStore.fetchUserProfile(username);
    } else {
      console.error('Username not found in localStorage.');
    }
    await noticeStore.fetchNoticeById(route.params.id);
    noti.value = noticeStore.selectedNotice; // fetch 이후 값 설정
  } catch (error) {
    console.error(error);
    router.push('/notices'); // 오류 발생 시 목록으로 이동
  } finally {
    isLoading.value = false; // 로딩 완료
  }
});

const deleteNotice = async () => {
  try {
    await noticeStore.deleteNotice(route.params.id);
    router.push('/notices'); // 삭제 후 목록으로 리디렉션
  } catch (error) {
    console.error("삭제 중 오류:", error);
  }
};

const user = computed(() => authStore.user);
const isAuthenticated = computed(() => authStore.isAuthenticated);
</script>