import store from "../store/index.js";

export default class MoviePresenter {
  constructor(view) {
    this.view = view;
  }

  async loadMovies() {
    try {
      await store.actions.fetchMovies();
      this.view.displayMovies(store.movies);
    } catch (error) {
      this.view.displayError(error);
    }
  }

  async loadMovieDetail(movieId) {
    try {
      const movie = store.getMovieById(movieId);
      if (movie) {
        this.view.displayMovieDetail(movie);
      } else {
        throw new Error("영화를 찾을 수 없습니다.");
      }
    } catch (error) {
      this.view.displayError(error);
    }
  }

  addReview(movieId, review) {
    try {
      console.log("run addRevie");
      store.addReview(movieId, review);
      this.view.displaySuccess("리뷰가 성공적으로 추가되었습니다.");
    } catch (error) {
      this.view.displayError(error);
    }
  }
}
