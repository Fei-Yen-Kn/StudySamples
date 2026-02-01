<template>
  <div>
    <h1 class="pure-u-1">콘텐츠 목록</h1><hr/>
    <div v-if="isAuthenticated">
      <ul class="pure-menu-list">
        <li 
          v-for="content in filteredContents" 
          :key="content.id" 
          class="pure-menu-item"
        >
          <router-link :to="`/contents/${content.id}`" class="pure-menu-link">{{ content.title }}</router-link>
        </li>
      </ul>
    </div>
    <router-link to="/contents/new" class="pure-button pure-button-primary">콘텐츠 등록</router-link>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useContentStore } from '../store/useContentStore';
import { useAuthStore } from '../store/useAuthStore'; // 사용자 인증 스토어

const contentStore = useContentStore();
const authStore = useAuthStore(); // 현재 사용자 정보 가져오기

onMounted(() => {
  contentStore.fetchContents(); // 콘텐츠 목록 가져오기
});

const contents = computed(() => contentStore.contents);
const user = computed(() => authStore.user);
const isAuthenticated = computed(() => authStore.isAuthenticated);

// 관리자 여부 및 사용자에 따른 콘텐츠 필터링
const filteredContents = computed(() => {
  if (user.value?.role === 'ADMIN') {
    return contents.value; // 관리자는 모든 콘텐츠를 볼 수 있음
  } else {
    return contents.value.filter(content => content.author?.id === user.value?.id); // 일반 사용자는 자신의 콘텐츠만 볼 수 있음
  }
});
</script>