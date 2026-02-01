<template>
  <div class="post-detail">
    <h3>{{ post.content }}</h3><hr/>
    <div class="cell small-12 medium-12 large-12">
      <router-link to="/posts" class="button right" style="float: right">목록으로 이동</router-link>
    </div>
    <div class="cell small-12 medium-12 large-12">
      <p v-if="post.media_type == 'IMAGE'">
        <img :src="`/assets/${post.media_url}`" alt="Post Media" class="media-image" />
      </p>
      <p v-else-if="post.media_type == 'VIDEO'">
        <video :src="`/assets/${post.media_url}`" controls class="media-video"></video>
      </p>
      <p v-else-if="post.media_type == 'TEXT'">
        <i class="icon-note"></i> <a :href="`/assets/${post.media_url}`" download>{{ post.media_url }}</a>
      </p>
    </div>
    <small>at {{ post.created_at }}</small>
    <div class="post-actions" v-if="canEditOrDelete">
      <button class="button small" @click="goToEditPage">수정</button>
      <button class="button small alert" @click="deletePost">삭제</button>
    </div>
    <div class="cell small-12 medium-6 large-4">
      <CommentList :post="post"/>
    </div>
    <div class="cell small-12 medium-6 large-4">
      <CommentForm :post="post"/>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useAuthStore } from '@/store/authStore';
import { usePostStore } from '@/store/postStore';
import CommentList from '@/components/CommentList.vue';
import CommentForm from '@/components/CommentForm.vue';
const router = useRouter();
const route = useRoute();
const postStore = usePostStore();
const authStore = useAuthStore();
const post = computed(() => postStore.post);
onMounted(async () => {
  const postId = route.params.id;
  await postStore.fetchPostById(postId);
  if (!post.value) {
    console.error('Post not found');
    router.push('/'); // 게시물이 없으면 메인 페이지로 이동
  }
});
const canEditOrDelete = computed(() => {
  return authStore.user?.id === post.userId;
});
const goToEditPage = () => {
  postStore.updatePost(post.value.id);
};
const deletePost = () => {
  if (confirm('정말로 삭제하겠습니까?')) {
    postStore.removePost(post.value.id);
    router.push('/'); // 삭제 후 메인 페이지로 이동
  }
};
</script>

<style scoped>
.post-detail {
  padding: 20px;
}
button {
  margin-top: 10px;
  margin-right: 10px;
}
.media-image {
  max-width: 100%;
  height: auto;
}
.media-video {
  max-width: 100%;
  height: auto;
}
.icon-note::before {
  font-style: normal;
  margin-right: 5px;
  content: '📝'; /* 메모장 아이콘 대신 이모지 사용 */
}
</style>
  