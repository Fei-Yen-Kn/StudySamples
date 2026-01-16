import { reactive } from "vue";
import axios from "axios";

const regions = [
  // 지역 데이터
  { id: 1, name: "서울", coords: { lat: 37.5665, lon: 126.978 } },
  { id: 2, name: "수원", coords: { lat: 37.2636, lon: 127.0286 } },
  { id: 3, name: "강릉", coords: { lat: 37.7516, lon: 128.8761 } },
  { id: 4, name: "원주", coords: { lat: 37.321, lon: 127.9234 } },
  { id: 5, name: "대전", coords: { lat: 36.3504, lon: 127.3845 } },
  { id: 6, name: "청주", coords: { lat: 36.6424, lon: 127.489 } },
  { id: 7, name: "광주", coords: { lat: 35.1595, lon: 126.8526 } },
  { id: 8, name: "전주", coords: { lat: 35.8242, lon: 127.1478 } },
  { id: 9, name: "대구", coords: { lat: 35.8722, lon: 128.6014 } },
  { id: 10, name: "부산", coords: { lat: 35.1796, lon: 129.0756 } },
  { id: 11, name: "제주", coords: { lat: 33.4996, lon: 126.5312 } },
];

const state = reactive({
  regions: [],
  loading: false,
  error: null,
});

const actions = {
  async fetchWeatherData() {
    state.loading = true;
    state.error = null;

    try {
      const promises = regions.map((region) => {
        // 무료로 사용할 수 있는 Open-Meteo API를 활용
        const { lat, lon } = region.coords;
        return axios
          .get(`https://api.open-meteo.com/v1/forecast`, {
            params: {
              latitude: lat,
              longitude: lon,
              current_weather: true,
            },
          })
          .then((response) => {
            return {
              ...region,
              weather: response.data.current_weather,
            };
          });
      });
      const results = await Promise.all(promises);
      state.regions = results;
    } catch (err) {
      state.error = err;
    } finally {
      state.loading = false;
    }
  },
};

export default {
  state,
  actions,
  get regions() {
    return state.regions;
  },
  get loading() {
    return state.loading;
  },
  get error() {
    return state.error;
  },
};
