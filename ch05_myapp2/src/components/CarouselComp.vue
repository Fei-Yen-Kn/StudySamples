<template>
  <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <!-- 슬라이드 인디케이터 -->
      <button
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="슬라이드 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide-to="1"
        aria-label="슬라이드 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide-to="2"
        aria-label="슬라이드 3"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide-to="3"
        aria-label="슬라이드 4"
      ></button>
    </div>
    <div class="carousel-inner">
      <!-- 슬라이드 아이템 -->
      <div
        class="carousel-item"
        :class="{ active: index === 0 }"
        v-for="(slide, index) in slides"
        :key="slide.id"
        data-bs-interval="300"
      >
        <img :src="slide.image" class="d-block w-100" :alt="slide.title" />
        <div class="carousel-caption d-none d-md-block">
          <h5>{{ slide.title }}</h5>
          <p>{{ slide.description }}</p>
          <a href="#" class="btn btn-primary">더보기</a>
        </div>
      </div>
    </div>
    <!-- 이전/다음 컨트롤 -->
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">이전</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">다음</span>
    </button>
  </div>
</template>
<script setup>
import { ref } from "vue";
const slides = ref([
  {
    id: 1,
    title: "첫 번째 슬라이드",
    description: "이것은 첫 번째 슬라이드의 설명입니다.",
    image: require("@/assets/slide1.jpg"),
  },
  {
    id: 2,
    title: "두 번째 슬라이드",
    description: "이것은 두 번째 슬라이드의 설명입니다.",
    image: require("@/assets/slide2.jpg"),
  },
  {
    id: 3,
    title: "세 번째 슬라이드",
    description: "이것은 세 번째 슬라이드의 설명입니다.",
    image: require("@/assets/slide3.jpg"),
  },
  {
    id: 4,
    title: "네 번째 슬라이드",
    description: "이것은 네 번째 슬라이드의 설명입니다.",
    image: require("@/assets/slide2.jpg"),
  },
]);
</script>
<style scoped>
.carousel-item img {
  height: 400px;
  object-fit: cover;
}
</style>
