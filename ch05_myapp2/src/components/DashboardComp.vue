<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">홈</a></li>
        <li class="breadcrumb-item active" aria-current="page">대시보드</li>
      </ol>
    </nav>
    <CarouselComp />
    <h1 class="mt-4 mb-3">관리 대시보드</h1>
    <p>여기는 관리 대시보드의 주요 정보를 표시하는 영역입니다. 다양한 위젯과 통계 데이터를 통해 시스템 상태를 모니터링할 수 있습니다.</p>
    <img src="@/assets/dashboard_image.png" alt="Dashboard Image" class="img-fluid mb-4">
    <button class="btn btn-primary me-2">추가하기</button>
    <button class="btn btn-secondary">취소</button>
    <div class="mt-5">
      <CardComp />
    </div>
    <div class="mt-5">
      <TableComp />
    </div>
    <div class="mt-5">
      <FormComp />
    </div>
</div>
</template>
<script setup>
import CarouselComp from './CarouselComp.vue';
import CardComp from './CardComp.vue';
import TableComp from './TableComp.vue';
import FormComp from './FormComp.vue';
</script>