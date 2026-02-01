<template>
    <div class="post-item">
      <p>{{ post.content }}</p>
      <small>at {{ post.created_at }}</small>
      <div class="post-actions">
        <span>
          <router-link :to="`/post/${post.id}`" class="button small">자세히 보기</router-link> &nbsp; &nbsp;
        </span>
        <span v-if="canEditOrDelete">
          <router-link :to="`/post/edit/${post.id}`" class="button small">수정</router-link> &nbsp; &nbsp;
          <button class="button small alert" @click="deletePost">삭제</button>
        </span>
      </div>
    </div>
  </template>
  <script setup>
  import { defineProps, computed } from 'vue';
  import { useAuthStore } from '@/store/authStore';
  import { usePostStore } from '@/store/postStore';
  const props = defineProps({
    post: {
      type: Object,
      required: true,
    },
  });
  const authStore = useAuthStore(); // 사용자 인증 정보
  const postStore = usePostStore(); // 게시물 상태 관리
  // 사용자가 게시물 작성자인지 확인 (권한 체크)
  const canEditOrDelete = computed(() => {
    return authStore.user?.id === props.post.userId;
  });
  const editPost = () => {
    postStore.updatePost(props.post.id); 
  };
  const deletePost = () => {
    if (confirm('정말 삭제하겠습니까?')) {
      postStore.deletePost(props.post.id); 
    }
  };
  </script>
  <style scoped>
  .post-item {
    padding: 20px;
    border: 1px solid #ccc;
    margin-bottom: 15px;
    border-radius: 5px;
    background-color: #f9f9f9;
  }
  .post-actions {
    margin-top: 10px;
  }
  button {
    margin-right: 10px;
  }
  </style>
  