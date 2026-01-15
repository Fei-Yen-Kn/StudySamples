<template>
  <div class="container">    <!-- 브레드크럼 -->
    <nav>
      <div class="nav-wrapper">
        <div class="col s12">
          <a href="#" class="breadcrumb">홈</a>
          <a href="#" class="breadcrumb">포트폴리오</a>
        </div>
      </div>
    </nav>
    <BannerSliderComp />    <!-- 배너 슬라이더 컴포넌트 -->
    <h3 class="center-align">모바일 커머스 플랫폼</h3><!-- 제목 -->
    <p class="flow-text center-align"><!-- 문단 -->
      최신 모바일 기술을 활용한 혁신적인 커머스 플랫폼을 소개합니다. 사용하기 쉬운 인터페이스와 다양한 기능으로 고객 경험을 극대화하세요.
    </p>
    <div class="section">
      <img src="@/assets/commerce_image.png" alt="Commerce Image" class="responsive-img"><!-- 이미지 -->
    </div>
    <div class="center-align">		<!-- 버튼 -->
      <a href="#" class="waves-effect waves-light btn-large">지금 시작하기</a>
      <a href="#" class="waves-effect waves-light btn-large grey lighten-1">자세히 보기</a>
    </div>
    <div class="row">   <!-- 카드, 테이블, 폼 컴포넌트 -->
      <div class="col s12 m6">
        <CardComp />
      </div>
      <div class="col s12 m6">
        <TableComp />
      </div>
      <div class="col s12 m6">
        <FormComp />
      </div>
    </div>
  </div>
</template>
<script setup>
import BannerSliderComp from './BannerSliderComp.vue';
import CardComp from './CardComp.vue';
import TableComp from './TableComp.vue';
import FormComp from './FormComp.vue';
</script>
<style scoped>
.container {
  margin-top: 20px;
}
</style>    