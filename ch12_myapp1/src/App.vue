<template>
  <div>
    <nav class="top-bar">
      <div class="top-bar-left">
        <ul class="dropdown menu" data-dropdown-menu>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/boards">공지사항</router-link></li>
          <li><router-link to="/qna">Q&A</router-link></li>
          <li><router-link to="/dataroom">자료실</router-link></li>
          <li><router-link to="/products">상품관리</router-link></li>
          <li><router-link to="/chatbot">챗봇</router-link></li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style>
.top-bar {
  margin-bottom: 1rem;
}
.grid-container {
  padding: 4rem;
}
</style>
