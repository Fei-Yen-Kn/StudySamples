<template>
  <form @submit.prevent="submit" class="pure-form pure-form-stacked" @dragover.prevent @drop.prevent="handleDrop">
    <fieldset>
      <input type="hidden" v-model="form.contentId" />
      <label for="filePath">File Path</label>
      <input id="filePath" v-model="form.filePath" placeholder="등록할 콘텐츠를 드래그하여 여기에 놓아 주세요" required />
      <label for="fileType">File Type</label>
      <select id="fileType" v-model="form.fileType">
        <option value="IMAGE">Image</option>
        <option value="VIDEO">Video</option>
      </select>
      <button type="submit" class="pure-button pure-button-primary">등록</button>
    </fieldset>
  </form>
</template>
<script setup>
import { useGalleryStore } from '../store/useGalleryStore';
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();
const galleryStore = useGalleryStore();
const form = ref({
  filePath: '',
  fileType: 'IMAGE',
  contentId: route.params.contentId || '' // contentId를 route params에서 가져옵니다.
});
const handleDrop = (event) => {
  const file = event.dataTransfer.files[0];
  if (file) {
    form.value.filePath = file.name; // 파일 이름을 filePath로 설정
    form.value.fileType = file.type.startsWith('video') ? 'VIDEO' : 'IMAGE'; // 비디오 또는 이미지 유형 설정
  }
};
const submit = async () => {
  if (form.value.contentId) {
    // 갤러리 등록
    await galleryStore.addGallery(form.value);
    router.push(`/contents/${form.value.contentId}`); // 등록 후 콘텐츠 상세 페이지로 돌아가기
  } else {
    console.error('Content ID is missing.');
  }
};
onMounted(() => {
  console.log('Received contentId:', route.params.contentId);
});
</script>