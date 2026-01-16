<template>
  <div>
    <h2 class="text-2xl font-semibold mb-4">지역별 날씨 목록</h2>
    <div v-if="store.loading" class="flex justify-center">
      <div
        class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"
      ></div>
    </div>
    <div v-else>
      <ul class="space-y-2">
        <li
          v-for="region in store.regions"
          :key="region.id"
          class="bg-white shadow rounded p-4 flex justify-between items-center"
        >
          <router-link
            :to="`/weather/${region.id}`"
            class="text-lg font-medium text-blue-600 hover:underline"
            >{{ region.name }}</router-link
          >
          <span
            :class="
              region.weather.main === 'Clear'
                ? 'text-yellow-500'
                : 'text-gray-700'
            "
            >{{ region.weather.main }}</span
          >
        </li>
      </ul>
    </div>
    <div v-if="store.error" class="mt-4 text-red-500">
      오류가 발생했습니다: {{ store.error.message }}
    </div>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import store from "../store/index.js";
const storeRef = store;
onMounted(() => {
  storeRef.actions.fetchWeatherData();
});
</script>
<style scoped>
.loader {
  border-top-color: #3498db;
  animation: spin 1s infinite linear;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
