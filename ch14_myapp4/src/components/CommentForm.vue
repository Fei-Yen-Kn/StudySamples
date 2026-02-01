<template>
  <div class="comment-form">
    <h3>Post a Comment</h3>
    <form @submit.prevent="submitComment">
      <div class="grid-x grid-padding-x">
        <div class="cell small-12">
          <textarea v-model="newComment" placeholder="Type your comment..." rows="4" class="input-group-field" required></textarea>
        </div>
        <div class="cell small-12">
          <button type="submit" class="button success expanded">Post Comment</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue';
import { useCommentStore } from '@/store/commentStore';
import { useAuthStore } from '@/store/authStore'; 
const authStore = useAuthStore();
const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});
const content = ref('');
const commentStore = useCommentStore();
const addComment = async () => {
  if (!content.value.trim()) return;
  await commentStore.addComment({
    postId: props.post.id,
    username: props.post.userId, // 실제 유저 정보로 교체
    content: newComment.value,
  });
  content.value = ''; // 입력값 초기화
};
const user = computed(() => authStore.user);
</script>
<style scoped>
.comment-form {
  padding: 20px;
}
textarea.input-group-field {
  width: 100%;
  padding: 10px;
  font-size: 14px;
}
button.expanded {
  width: 100%;
  margin-top: 10px;
}
</style>  