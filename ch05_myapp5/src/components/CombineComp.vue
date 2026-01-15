<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb is-centered" aria-label="breadcrumbs">
        <ul>
          <li><a href="#">홈</a></li>
          <li class="is-active"><a href="#" aria-current="page">포트폴리오</a></li>
        </ul>
      </nav>
      <VisualSliderComp />
      <h1 class="title is-3 mt-6">나의 포트폴리오</h1>
      <p class="subtitle is-5">
        다양한 프로젝트와 경험을 통해 쌓은 나의 역량을 소개합니다. 아래에서 프로젝트를 확인하고, 연락처를 통해 언제든지 문의해주세요.
      </p>
      <figure class="image is-4by3 mt-4">
        <img src="@/assets/portfolio_image.png" alt="Portfolio Image">
      </figure>
      <div class="buttons mt-4">
        <a href="#" class="button is-link">프로젝트 보기</a>
        <a href="#" class="button is-light">연락하기</a>
      </div>
      <div class="columns is-multiline mt-6">
        <div class="column is-half"><CardComp /></div>
        <div class="column is-half"><TableComp /></div>
        <div class="column is-half"><FormComp /></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import VisualSliderComp from './VisualSliderComp.vue';
import CardComp from './CardComp.vue';
import TableComp from './TableComp.vue';
import FormComp from './FormComp.vue';
</script>    