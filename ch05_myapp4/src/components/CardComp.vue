<template>
    <div class="card">
      <div class="card-content">
        <span class="card-title">추천 상품</span>
        <div class="row">
          <!-- 첫 번째 제품을 별도로 렌더링 -->
          <div class="col s12 m6" v-if="products.length > 0">
            <div class="card small">
              <div class="card-image">
                <img :src="products[0].image" alt="Product Image">
                <span class="card-title">{{ products[0].title }}</span>
              </div>
              <div class="card-content">
                <p>{{ products[0].description }}</p>
              </div>
              <div class="card-action">
                <a href="#">더보기</a>
              </div>
            </div>
          </div>
          
          <!-- 나머지 제품들을 computed property로 렌더링 -->
          <div 
            class="col s12 m6" 
            v-for="product in otherProducts" 
            :key="product.id"
          >
            <div class="card small">
              <div class="card-image">
                <img :src="product.image" alt="Product Image">
                <span class="card-title">{{ product.title }}</span>
              </div>
              <div class="card-content">
                <p>{{ product.description }}</p>
              </div>
              <div class="card-action">
                <a href="#">더보기</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const products = ref([	// 카드 데이터
    { id: 1, title: '상품 1', description: '이것은 상품 1에 대한 설명입니다.',
      image: require('@/assets/product1.jpg') },
    { id: 2, title: '상품 2', description: '이것은 상품 2에 대한 설명입니다.',
      image: require('@/assets/product2.jpg') },
    { id: 3, title: '상품 3', description: '이것은 상품 3에 대한 설명입니다.',
      image: require('@/assets/product3.jpg') }
  ]);
  
  // 첫 번째 제품을 제외한 나머지 제품들
  const otherProducts = computed(() => {
    return products.value.slice(1);
  });
  </script>
  
  <style scoped>
  .card-image img {
    height: 200px;
    object-fit: cover;
  }
  .card-title {
    background: rgba(0, 0, 0, 0.5);
    padding: 5px;
  }
  </style>