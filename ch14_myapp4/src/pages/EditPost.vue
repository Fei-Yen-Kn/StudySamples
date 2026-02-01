<template>
  <div class="edit-post" v-if="post">
    <h3>Edit Post</h3>
    <hr />
    <form @submit.prevent="submitPost">
      <div class="grid-x grid-padding-x">
        <div class="cell small-12">
          <label for="content">Content</label>
          <textarea
            id="content"
            v-model="post.content"
            placeholder="Enter content"
            rows="5"
            class="input-group-field"
            required
          ></textarea>
        </div>
        <div class="cell small-12">
          <button type="submit" class="button success expanded">Update Post</button>
        </div>
      </div>
    </form>
  </div>
  <div v-else>Loading...</div> <!-- 데이터가 로드될 때까지 표시 -->
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useAuthStore } from '@/store/authStore';
import { usePostStore } from '@/store/postStore';

const router = useRouter();
const route = useRoute();
const postStore = usePostStore();
const authStore = useAuthStore();

const post = computed(() => postStore.currentPost); // 현재 게시물

onMounted(async () => {
  const postId = route.params.id;
  try {
    await postStore.fetchPostById(postId);
  } catch (error) {
    console.error('Failed to fetch post:', error);
  }
});

const canEdit = computed(() => {
  return post.value && authStore.user.id === post.value.userId;
});

const submitPost = async () => {
  if (!post.value) return;
  await postStore.updatePost(post.value.id, {
    content: post.value.content, // post.content로 업데이트
  });
  router.push(`/posts`);
};
</script>
<style scoped>
.edit-post {
  padding: 20px;
}
input.input-group-field,
textarea.input-group-field {
  width: 100%;
  padding: 10px;
  font-size: 14px;
}
button.expanded {
  width: 100%;
  margin-top: 20px;
}
</style>  