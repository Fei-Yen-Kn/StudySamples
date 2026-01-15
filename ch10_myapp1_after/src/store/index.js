import { createStore } from 'vuex';
import axios from 'axios';
const store = createStore({
  state: {
    products: [],
    currentProduct: null,
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_CURRENT_PRODUCT(state, product) {
      state.currentProduct = product;
    },
    ADD_PRODUCT(state, product) {
      // 중복 pno 확인 후 추가
      //if (!state.products.some(p => p.pno === product.pno)) {
        state.products.push(product);
      //}
    },
    UPDATE_PRODUCT(state, updatedProduct) {
      const index = state.products.findIndex(p => p.pno === updatedProduct.pno);
      if (index !== -1) {
        state.products.splice(index, 1, updatedProduct);
      }
    },
    DELETE_PRODUCT(state, pno) {
      state.products = state.products.filter(p => p.pno !== pno);
    },
    CLEAR_CURRENT_PRODUCT(state) {
      state.currentProduct = null;
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const response = await axios.get('/products/list');
        commit('SET_PRODUCTS', response.data);
      } catch (error) {
        console.error('상품 목록을 가져오는 중 오류 발생:', error.message);
      }
    },
    async fetchProductDetail({ commit }, pno) {
      try {
        const response = await axios.get(`/products/detail/${pno}`);
        commit('SET_CURRENT_PRODUCT', response.data);
      } catch (error) {
        console.error('상품 상세 정보를 가져오는 중 오류 발생:', error.message);
      }
    },
    async insertProduct({ commit }, formData) {
      try {
        const response = await axios.post('/products/insert', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        commit('ADD_PRODUCT', response.data);
      } catch (error) {
        console.error('상품을 등록하는 중 오류 발생:', error.message);
      }
    },
    async updateProduct({ commit }, { pno, formData }) {
      try {
        const response = await axios.put(`/products/update/${pno}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        commit('UPDATE_PRODUCT', response.data);
      } catch (error) {
        console.error('상품을 수정하는 중 오류 발생:', error.message);
      }
    },
    async deleteProduct({ commit }, pno) {
      try {
        await axios.delete(`/products/delete/${pno}`);
        commit('DELETE_PRODUCT', pno);
      } catch (error) {
        console.error('상품을 삭제하는 중 오류 발생:', error.message);
      }
    },
  },
  getters: {
    allProducts: (state) => state.products,
    getCurrentProduct: (state) => state.currentProduct,
  },
});
export default store;