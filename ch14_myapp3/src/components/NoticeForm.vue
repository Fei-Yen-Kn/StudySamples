<template>
  <div class="fr-content">
    <h2 class="title">공지사항 글 등록</h2><hr/>
    <form @submit.prevent="submit" class="pure-form pure-form-stacked">
      <fieldset>
        <label for="title">Title</label>
        <input id="title" v-model="form.title" placeholder="Enter title" required />
        <label for="content">Content</label>
        <textarea id="content" v-model="form.content" placeholder="Enter content" required></textarea>
        <button type="submit" class="pure-button pure-button-primary">Submit</button>
      </fieldset>
    </form>
  </div>  
</template>
<script setup>
import { useNoticeStore } from '../store/useNoticeStore';
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();
const noticeStore = useNoticeStore();
const form = ref({
  title: '',
  content: ''
});
if (route.params.id) {
  const selectedNotice = noticeStore.selectedNotice;
  watch(() => selectedNotice, () => {
    form.value = { ...selectedNotice };
  });
}
const submit = async () => {
  if (route.params.id) {
    await noticeStore.updateNotice(route.params.id, form.value);
  } else {
    await noticeStore.addNotice(form.value);
  }
  router.push('/notices');
};
</script>
  