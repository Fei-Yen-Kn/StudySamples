<template>
  <div class="comment-list">
    <h3>Comments</h3>
    <hr />
    <div v-if="comments.length === 0" class="empty-state">
      <p>No comments yet.</p>
    </div>
    <div v-else>
      <div class="comment" v-for="comment in comments" :key="comment.id">
        <p><strong>{{ comment.username }}</strong></p>
        <p>{{ comment.content }}</p>
        <hr />
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted, watch } from 'vue';
import { useCommentStore } from '@/store/commentStore';
const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});
const commentStore = useCommentStore();
const comments = computed(() => commentStore.postComments);
const fetchComments = async () => {
  if (props.post?.id) {
    await commentStore.fetchCommentsByPostId(props.post.id);
  }
  console.log(comments.value);
};
onMounted(fetchComments);
watch(() => props.post.id, fetchComments); // post 변경 감지
</script>
<style scoped>
.comment-list {
  padding: 20px;
}
.comment {
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  border-radius: 5px;
}
.empty-state {
  padding: 10px;
  background-color: #f9f9f9;
  text-align: center;
}
hr {
  margin: 10px 0;
}
</style>