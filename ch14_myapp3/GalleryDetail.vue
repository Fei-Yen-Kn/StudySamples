<template>
    <div class="pure-g">
      <div class="pure-u-1">
        <h1>갤러리 콘텐츠 상세보기</h1><hr/>
        <p><strong>File Path:</strong> {{ gallery.filePath }}</p>
        <p><strong>File Type:</strong> {{ gallery.fileType }}</p>
      </div>
      <router-link to="/contents" class="pure-button">목록으로</router-link>
      <router-link :to="`/galleries/edit/${gallery.id}`" class="pure-button pure-button-primary">수정</router-link>
    </div>
  </template>
  <script setup>
  import { useGalleryStore } from './src/store/useGalleryStore';
  import { ref, onMounted } from 'vue';
  import { useRoute, useRouter  } from 'vue-router';
  const route = useRoute();
  const router = useRouter();
  const galleryStore = useGalleryStore();
  const gallery = ref({});
  onMounted(async () => {
    try {
      await galleryStore.fetchGalleryById(route.params.id);
      gallery.value = galleryStore.selGallery;
    } catch (error) {
      console.error(error);
      router.push('/'); 
    }
  });
  </script>