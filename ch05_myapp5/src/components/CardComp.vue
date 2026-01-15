<template>
  <div>
    <h3 class="title is-4">프로젝트 목록</h3>
    <div class="columns is-multiline">
      <div class="column is-one-third" v-for="project in projects" :key="project.id">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img :src="project.image" alt="Project Image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-5">{{ project.title }}</p>
              </div>
            </div>
            <div class="content">
              {{ project.description }}
              <br>
              <a href="#" class="button is-small is-link">더보기</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const projects = ref([  // 카드 데이터
  { id: 1, title: '프로젝트 1', description: '프로젝트 1에 대한 간략한 설명입니다.',
    image: require('@/assets/project1.jpg') },
  { id: 2, title: '프로젝트 2', description: '프로젝트 2에 대한 간략한 설명입니다.',
    image: require('@/assets/project2.jpg') },
  { id: 3, title: '프로젝트 3', description: '프로젝트 3에 대한 간략한 설명입니다.',
    image: require('@/assets/project3.jpg') }
]);
</script>
<style scoped>
.card-image img {
  object-fit: cover;
}
</style>    