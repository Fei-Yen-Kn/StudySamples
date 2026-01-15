<template>
  <div class="box">
    <swiper
      :slides-per-view="1"
      :loop="true"
      navigation
      pagination
      autoplay
      class="mySwiper"
    >
      <swiper-slide v-for="slide in slides" :key="slide.id">
        <div class="content has-text-centered">
          <figure class="image is-4by3">
            <img :src="slide.image" :alt="slide.title">
          </figure>
          <h3 class="title is-4">{{ slide.title }}</h3>
          <p class="subtitle is-6">{{ slide.description }}</p>
          <a href="#" class="button is-link">더보기</a>
        </div>
      </swiper-slide>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      <div class="swiper-pagination"></div>
    </swiper>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';   // Swiper 모듈
SwiperCore.use([Navigation, Pagination, Autoplay]);  // Swiper 모듈 사용
const slides = ref([  // 슬라이드 데이터
  { id: 1, title: '첫 번째 슬라이드', description: '첫 번째 슬라이드의 설명입니다.',
    image: require('@/assets/slide1.jpg') },
  { id: 2, title: '두 번째 슬라이드', description: '두 번째 슬라이드의 설명입니다.',
    image: require('@/assets/slide2.jpg') },
  { id: 3, title: '세 번째 슬라이드', description: '세 번째 슬라이드의 설명입니다.',
    image: require('@/assets/slide3.jpg') }
]);
</script>
<style scoped>
.mySwiper {
  width: 100%;
  height: 100%;
}
.swiper-slide img {
  object-fit: cover;
  height: 300px;
  width: 100%;
}
.swiper-button-prev,
.swiper-button-next {
  color: #3273dc;
}
.swiper-pagination-bullet-active {
  background-color: #3273dc;
}
</style>    