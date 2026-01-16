<template>
  <div class="section">
    <h2 class="center-align">영화 목록</h2>
    <div v-if="store.loading" class="progress">
      <div class="indeterminate"></div>
    </div>
    <div v-else>
      <ul class="collection">
        <li
          v-for="movie in store.movies"
          :key="movie.movieCd"
          class="collection-item"
        >
          <router-link :to="`/movies/${movie.movieCd}`">{{
            movie.movieNm
          }}</router-link>
        </li>
      </ul>
    </div>
    <div
      v-if="store.error"
      class="card-panel red lighten-4 red-text text-darken-4"
    >
      오류가 발생했습니다: {{ store.error.message }}
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import store from "../store/index.js";
onMounted(() => {
  store.actions.fetchMovies();
});
</script>
