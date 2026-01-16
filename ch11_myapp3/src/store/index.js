import { reactive } from "vue";
import axios from "axios";

const dummyReviews = {
  // 더미 리뷰 데이터
  20120101: [
    { author: "홍길동", content: "정말 재미있는 영화였습니다!" },
    {
      author: "김철수",
      content: "스토리가 탄탄하고 배우들의 연기가 뛰어났습니다.",
    },
  ],
};

const state = reactive({
  movies: [],
  loading: false,
  error: null,
  reviews: { ...dummyReviews }, // 초기 리뷰 데이터
});

const actions = {
  async fetchMovies() {
    state.loading = true;
    state.error = null;
    try {
      const targetDt = 20241031; //getTodayDate()
      console.log(targetDt);
      const apiKey = "633197061936141e9152b9d93f43ae3e";
      const response = await axios.get(
        "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json",
        {
          params: {
            key: apiKey,
            targetDt: targetDt,
          },
        }
      );
      console.log("Movies fetched:", response.data); // 응답 데이터 확인
      state.movies = response.data.boxOfficeResult.dailyBoxOfficeList;
    } catch (err) {
      state.error = err;
    } finally {
      state.loading = false;
    }
  },
  addReview(movieId, review) {
    if (!state.reviews[movieId]) {
      state.reviews[movieId] = [];
    }
    state.reviews[movieId].push(review);
  },
};

const getTodayDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}${month}${day}`;
};

export default {
  state,
  actions,
  get movies() {
    return state.movies;
  },
  get loading() {
    return state.loading;
  },
  get error() {
    return state.error;
  },
  getMovieById(id) {
    return state.movies.find((movie) => movie.movieCd === id);
  },
  getReviewsByMovieId(id) {
    return state.reviews[id] || [];
  },
};
