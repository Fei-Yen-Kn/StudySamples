<template>
  <div class="post-list">
    <h3>Post List</h3>
    <hr />
    <div v-if="!posts.length" class="empty-state">
      <p>No posts available.</p>
    </div>
    <div v-else>
      <div class="post-item" v-for="post in posts" :key="post.id">
        <PostItem :post="post" />
      </div>
    </div>
    <hr/>
    <div class="cell small-12 medium-6 large-4">
      <router-link to="/post/new" class="button success">글쓰기</router-link>
    </div>
  </div>
</template>
<script setup>
import { onMounted, computed } from 'vue';
import { usePostStore } from '@/store/postStore';
import { useUserStore } from '@/store/userStore';  // userStore 가져오기
import PostItem from '@/components/PostItem.vue';
const postStore = usePostStore();
const userStore = useUserStore();
const posts = computed(() => postStore.posts);
const user = computed(() => userStore.user);
onMounted(async () => {
  const uname = localStorage.getItem("username");
  await userStore.fetchUser(uname);
  const userId = user.value?.id;
  await postStore.fetchPostsByUser(userId); 
});
</script>
  <style scoped>
  .post-list {
    padding: 20px;
  }
  .empty-state {
    text-align: center;
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 5px;
  }
  .post-item {
    margin-bottom: 20px;
  }
  </style>  