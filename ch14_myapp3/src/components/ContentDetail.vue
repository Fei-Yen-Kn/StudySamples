<template>
  <div class="pure-g">
    <div class="pure-u-1">
      <h2>{{ content.title }}</h2><hr/>
      <p>설명: {{ content.description }}</p>
      <p>내용: {{ content.content }}</p>
      <p>작성자: {{ content.author }}</p>
      <p>작성일시: {{ content.createdAt }}</p>
      <hr/>
      <div>
        <h4>콘텐츠 갤러리</h4>
        <router-link :to="`/gallery/new/${content.id}`" class="pure-button pure-button-success">
          갤러리 콘텐츠 추가
        </router-link>
        <div class="blank" style="height:20px"></div>
        <div class="gallery-list">
          <div
            v-for="gallery in galleries"
            :key="gallery.id"
            class="gallery-item"
          >
            <img
              v-if="gallery.file_type === 'IMAGE'"
              :src="`/assets/${gallery.file_path}`"
              alt="Gallery Item"
              class="thumbnail"
            />
            <video
              v-else-if="gallery.file_type === 'VIDEO'"
              :src="`/assets/${gallery.file_path}`"
              controls
              class="thumbnail"
            ></video>
            <p>{{ gallery.file_path ? gallery.file_path.split('/').pop() : '파일 없음' }}</p>
          </div>
        </div>
      </div>
    </div>
    <router-link to="/contents" class="pure-button">콘텐츠 목록</router-link>
    <router-link :to="`/contents/edit/${content.id}`" class="pure-button pure-button-primary">콘텐츠 수정</router-link>
  </div>
</template>
  <script setup>
  import { useContentStore } from '../store/useContentStore';
  import { ref, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  const route = useRoute();
  const router = useRouter();
  const contentStore = useContentStore();
  const content = ref({});
  const galleries = ref([]);
  onMounted(async () => {
    try {
      await contentStore.fetchContentById(route.params.id);
      content.value = contentStore.selectedContent;
      await contentStore.fetchGalleryByContentId(route.params.id);
      galleries.value = contentStore.selectedGallery; // 배열
    } catch (error) {
      console.error(error);
      router.push('/'); // 오류 발생 시 목록으로 이동
    }
  });
</script>  
<style scoped>
.gallery-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.gallery-item {
  width: 200px;
  text-align: center;
}
.thumbnail {
  width: 100%;
  height: 150px;
  object-fit: cover;
}
.gallery-link {
  text-decoration: none;
  color: #333;
}
.gallery-link p {
  margin-top: 5px;
  font-size: 14px;
  text-align: center;
}
.pure-button-success {
  background: rgb(28, 184, 65);
  color: #fff;
}
</style>