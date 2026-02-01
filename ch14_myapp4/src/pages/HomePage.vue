<template>
    <div class="home">
      <h3 class="title">SNS 애플리케이션에 오신 것을 환영합니다.</h3><hr>
      <div class="msgbox">
        <h5 class="title">회원 전용 채팅창 제공, 회원 전용 쪽지함 제공, 회원 공용 공간 제공</h5>
      </div>
      <div class="grid-container" v-if="isAuthenticated">
        <div class="grid-x grid-padding-x">
          <!-- 게시물 목록을 반복해서 표시 -->
          <div class="cell small-12 medium-12 large-6" v-for="post in posts" :key="post.id">
            <div class="card">
              <div class="card-divider">
                <!-- 게시물 제목 -->
                <h5>{{ post.title }}</h5>
              </div>
              <div class="card-body">
                <!-- 게시물 내용 -->
                <p>{{ post.content }}</p>
              </div>
              <div class="card-footer">
                <!-- 게시물 상세보기 버튼 -->
                <router-link :to="`/posts/${post.id}`" class="button small">
                  Read more
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script setup>
import { onMounted, computed } from 'vue';
import { useAuthStore } from '@/store/authStore';
import { useUserStore } from '@/store/userStore';
import { usePostStore } from '@/store/postStore';
const authStore = useAuthStore();
const userStore = useUserStore();
const postStore = usePostStore();
const user = computed(() => userStore.user);
const posts = computed(() => postStore.posts);
const isAuthenticated = computed(() => authStore.isAuthenticated)  // 로그인 상태 확인
const loadPosts = async () => {
  try {
    const username = localStorage.getItem("username");
    if(username) {
      await userStore.fetchUser(username);
      posts.value = await postStore.fetchPostsByUser(user.value?.id)  // 게시물 목록을 비동기적으로 로드
    }
  } catch (error) {
    console.error('게시물 목록을 불러오는 중 오류 발생:', error);
  }
};
onMounted(loadPosts);  // 컴포넌트가 마운트될 때 게시물 목록을 불러옴
</script>
<style scoped>
.home {
  padding: 36px;
}
/* 카드 스타일 */
.card {
  margin-bottom: 20px;
}
.card h5, .card p, .card a {
  margin: 10px;
}
.card-divider {
  font-size: 1.2rem;
  font-weight: bold;
  padding: 10px;
}
.card-body {
  font-size: 1rem;
}
.card-footer {
  text-align: right;
}
</style>