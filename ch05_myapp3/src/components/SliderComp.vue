<template>
  <div class="swiper-container">
    <swiper :slides-per-view="1" :loop="true" navigation pagination autoplay>
      <swiper-slide v-for="slide in slides" :key="slide.id">
        <div class="relative">
          <img :src="slide.image" :alt="slide.title" class="w-full h-64 object-cover rounded-md">
          <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4">
            <h3 class="text-2xl font-bold mb-2">{{ slide.title }}</h3>
            <p class="mb-4">{{ slide.description }}</p>
            <a href="#" class="px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600">더보기</a>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-button-prev"></div>      <!-- 네비게이션 버튼 -->
      <div class="swiper-button-next"></div>
      <div class="swiper-pagination"></div><!-- 페이징 -->
    </swiper>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';  // Swiper 모듈
SwiperCore.use([Navigation, Pagination, Autoplay]);   // Swiper 모듈 사용
const slides = ref([   // 슬라이드 데이터
  { id: 1, title: '첫 번째 슬라이드', description: '첫 번째 슬라이드의 설명입니다.',
    image: require('@/assets/slide1.jpg')  },
  { id: 2, title: '두 번째 슬라이드', description: '두 번째 슬라이드의 설명입니다.',
    image: require('@/assets/slide2.jpg')  },
  { id: 3, title: '세 번째 슬라이드', description: '세 번째 슬라이드의 설명입니다.',
    image: require('@/assets/slide3.jpg')  }
]);
</script>
<style scoped>
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-button-prev,
.swiper-button-next {
  color: white;
}
.swiper-pagination-bullet-active {
  background-color: white;
}
</style>    