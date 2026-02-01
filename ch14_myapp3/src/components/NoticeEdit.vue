<template>
    <div class="pure-g">
      <div class="pure-u-1">
        <h1>공지사항 수정</h1><hr>
        <form @submit.prevent="updateNotice" class="pure-form pure-form-stacked">
          <fieldset>
            <label for="title">제목</label>
            <input 
              id="title" 
              v-model="form.title" 
              type="text" 
              placeholder="공지사항 제목" 
              required 
            />
            
            <label for="content">내용</label>
            <textarea 
              id="content" 
              v-model="form.content" 
              placeholder="공지사항 내용" 
              rows="10" 
              required
            ></textarea>
  
            <button type="submit" class="pure-button pure-button-primary">저장</button>
            <router-link to="/notices" class="pure-button">취소</router-link>
          </fieldset>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useNoticeStore } from '../store/useNoticeStore';
  import { useRoute, useRouter } from 'vue-router';
  import { onMounted, ref } from 'vue';
  
  const route = useRoute();
  const router = useRouter();
  const noticeStore = useNoticeStore();
  
  const form = ref({
    title: '',
    content: ''
  });
  
  onMounted(async () => {
    try {
      await noticeStore.fetchNoticeById(route.params.id);
      const notice = noticeStore.selectedNotice;
      if (notice) {
        form.value.title = notice.title;
        form.value.content = notice.content;
      } else {
        throw new Error('Notice not found');
      }
    } catch (error) {
      console.error('Error fetching notice:', error);
      router.push('/notices');
    }
  });
  
  const updateNotice = async () => {
    try {
      await noticeStore.updateNotice(route.params.id, form.value);
      router.push(`/notices/${route.params.id}`); // 수정 후 상세보기 페이지로 이동
    } catch (error) {
      console.error('Error updating notice:', error);
    }
  };
  </script>
  
  <style scoped>
  /* 스타일링을 추가하여 폼을 보기 좋게 만들기 */
  form {
    max-width: 600px;
    margin: 0 auto;
  }
  
  textarea {
    resize: vertical;
  }
  </style>