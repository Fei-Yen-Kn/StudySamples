<template>
  <div class="post-form">
    <h3>Create a New Post</h3>
    <form @submit.prevent="submitPost">
      <div class="grid-x grid-padding-x">
        <div class="cell small-12">
          <label for="mediaUrl">Media</label>
          <input type="file" id="mediaUrl" @change="handleFileUpload" class="input-group-field" />
        </div>
        <div class="cell small-12">
          <label for="content">Content</label>
          <textarea
            id="content"
            v-model="content"
            placeholder="Enter content"
            rows="5"
            class="input-group-field"
            required
          ></textarea>
        </div>
        <div class="cell small-12">
          <button type="submit" class="button success expanded">Create Post</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/store/authStore';
import { usePostStore } from '@/store/postStore';
const content = ref('');
const mediaFile = ref(null);
const authStore = useAuthStore();
const postStore = usePostStore();
const handleFileUpload = (event) => {
  mediaFile.value = event.target.files[0]; // 파일 객체 저장
};
const submitPost = async () => {
  if (!authStore.isAuthenticated) {
    alert('You must be logged in to create a post.');
    return;
  }
  const formData = new FormData();
  formData.append('content', content.value);
  formData.append('mediaFile', mediaFile.value);
  formData.append('userId', authStore.user.id); // 사용자 ID 포함
  try {
    await postStore.createPost(formData);
    alert('Post created successfully!');
    content.value = ''; // 폼 초기화
    mediaFile.value = null;
  } catch (error) {
    console.error('Failed to create post:', error);
  }
};
</script>
<style scoped>
.post-form {
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