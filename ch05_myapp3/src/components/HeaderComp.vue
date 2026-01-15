<template>
  <header class="bg-white shadow">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <div class="flex items-center">      <!-- 로고 -->
        <img src="@/assets/logo.png" alt="Logo" class="h-8 w-8 mr-2">
        <span class="font-semibold text-xl">StartupApp</span>
      </div>
      <nav>      <!-- 롤오버 2단 메인메뉴 -->
        <ul class="flex space-x-4">
          <li class="group relative">
            <a href="#" class="text-gray-700 hover:text-blue-500">메뉴1</a><!-- 서브메뉴 -->
            <ul class="absolute left-0 mt-2 w-40 bg-white border rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <li><a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">서브메뉴1-1</a></li>
              <li><a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">서브메뉴1-2</a></li>
            </ul>
          </li>
          <li class="group relative">
            <a href="#" class="text-gray-700 hover:text-blue-500">메뉴2</a>            <!-- 서브메뉴 -->
            <ul class="absolute left-0 mt-2 w-40 bg-white border rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <li><a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">서브메뉴2-1</a></li>
              <li><a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">서브메뉴2-2</a></li>
            </ul>
          </li>
        </ul>
      </nav>
      <div class="flex items-center space-x-4">      <!-- 상단 메뉴 -->
        <input type="text" placeholder="검색" class="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
        <button class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">검색</button>
      </div>
    </div>
  </header>
</template>
<script setup>
</script>  