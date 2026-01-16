<template>
  <div class="section">
    <h4>리뷰 목록</h4>
    <ul class="collection">
      <li
        v-for="(review, index) in reviews"
        :key="index"
        class="collection-item"
      >
        <span class="title">{{ review.author }}</span>
        <p>{{ review.content }}</p>
      </li>
    </ul>
    <div v-if="reviews.length === 0" class="grey-text">
      등록된 리뷰가 없습니다.
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import store from "../store/index.js";
const props = defineProps({
  movieId: {
    type: String,
    required: true,
  },
});
const reviews = computed(() => store.getReviewsByMovieId(props.movieId));
</script>
