<template>
  <div>
    <h3 class="mb-4">카드 목록</h3>
    <div class="row">
      <div class="col-md-4 mb-4" v-for="item in items" :key="item.id">
        <div class="card h-100">
          <img :src="item.image" class="card-img-top" :alt="item.title">  <!-- 항목 이미지 -->
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ item.title }}</h5>      <!-- 항목 제목 -->
            <p class="card-text">{{ item.content }}</p>    <!-- 항목 내용 -->
            <a href="#" class="btn btn-primary mt-auto">더보기</a>  <!-- 더보기 버튼 -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const items = ref([  // 카드 데이터
  { id: 1, title: '항목 1', content: '이것은 항목 1의 내용입니다.',
    image: require('@/assets/card1.jpg') },
  { id: 2, title: '항목 2', content: '이것은 항목 2의 내용입니다.',
    image: require('@/assets/card2.jpg') },
  { id: 3, title: '항목 3', content: '이것은 항목 3의 내용입니다.',
    image: require('@/assets/card3.jpg')  }
]);
</script>
<style scoped>
.card-img-top {
  height: 200px;
  object-fit: cover;
}
</style>    