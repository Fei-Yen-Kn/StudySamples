<template>
  <div class="container mx-auto px-4 py-8">
    <nav class="flex mb-4" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 md:space-x-3">
        <li class="inline-flex items-center">
          <a href="#" class="text-gray-700 hover:text-blue-500 flex items-center">
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 20l-6-6h4V8a2 2 0 114 0v6h4l-6 6z"/>
            </svg>
            홈
          </a>
        </li>
        <li>
          <div class="flex items-center">
            <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
            </svg>
            <a href="#" class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-500 md:ml-2">대시보드</a>
          </div>
        </li>
      </ol>
    </nav>
    <SliderComp />
    <h1 class="text-3xl font-bold mt-8 mb-4">스타트업 웹 애플리케이션</h1>
    <p class="text-gray-700 mb-6">
      이곳은 스타트업 웹 애플리케이션의 주요 정보를 표시하는 영역입니다. 혁신적인 기능과 사용자 친화적인 디자인으로 비즈니스를 성장시키세요.
    </p>
    <div class="mb-6">
      <img src="@/assets/dashboard_image.png" alt="Dashboard Image" class="w-full h-auto rounded-md shadow-md">
    </div>
    <div class="mb-8">
      <button class="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 mr-4">시작하기</button>
      <button class="px-6 py-3 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400">자세히 보기</button>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <CardComp />
      <TableComp />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
      <FormComp />
    </div>
  </div>
</template>
<script setup>
import SliderComp from './SliderComp.vue';
import CardComp from './CardComp.vue';
import TableComp from './TableComp.vue';
import FormComp from './FormComp.vue';
</script>    