<template>
  <div class="weather-widget card p-4">
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="도시명을 입력하세요"
        v-model="city"
        @keyup.enter="fetchWeather"
      />
      <button class="btn btn-primary" @click="fetchWeather">검색</button>
    </div>
    <div v-if="weather" class="weather-info">
      <h2>{{ weather.name }}의 날씨</h2>
      <p>온도: {{ weather.main.temp }}°C</p>
      <p>상태: {{ weather.weather[0].description }}</p>
    </div>
    <div v-else-if="error" class="alert alert-danger">
      {{ error }}
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
const city = ref("");
const weather = ref(null);
const error = ref(null);
const fetchWeather = async () => {
  if (!city.value) {
    error.value = "도시명을 입력해주세요.";
    weather.value = null;
    return;
  }
  const apiKey = "047ea91a02e19c4e493ceb04d81879f6";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=${apiKey}`;
  try {
    const response = await axios.get(url);
    console.log("fetchWeather:", response.data);
    weather.value = response.data;
    error.value = null;
  } catch (err) {
    error.value = "날씨 정보를 가져오는 데 실패했습니다.";
    weather.value = null;
  }
};
</script>

<style scoped>
.weather-widget {
  max-width: 500px;
  margin: 0 auto;
}
.weather-info {
  margin-top: 20px;
}
</style>
