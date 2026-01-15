<template>
  <div>
    <h3 class="text-xl font-semibold mb-4">제품 목록</h3>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white rounded-lg shadow-md overflow-hidden" v-for="item in items" :key="item.id">        
        <img :src="item.image" alt="Product Image" class="w-full h-48 object-cover"><!-- 항목 이미지 -->
        <div class="p-4 flex flex-col">
          <h4 class="text-lg font-bold mb-2">{{ item.title }}</h4>          <!-- 항목 제목 -->
          <p class="text-gray-700 flex-grow">{{ item.content }}</p>          <!-- 항목 내용 -->
          <a href="#" class="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 text-center">더보기</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const items = ref([  // 카드 데이터
  { id: 1, title: '제품 1', content: '제품 1에 대한 간략한 설명입니다.',
    image: require('@/assets/card1.jpg') },
  { id: 2, title: '제품 2', content: '제품 2에 대한 간략한 설명입니다.',
    image: require('@/assets/card2.jpg') },
  { id: 3, title: '제품 3', content: '제품 3에 대한 간략한 설명입니다.',
    image: require('@/assets/card3.jpg') }
]);
</script>
<style scoped>
img {
  height: 192px; /* 48 * 4 */
  object-fit: cover;
}
</style>    