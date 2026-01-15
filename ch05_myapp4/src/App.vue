<template>
  <div>
    <HeaderComp />
    <main>
      <CollectComp />
    </main>
    <footer class="page-footer teal">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">모바일 커머스</h5>
            <p class="grey-text text-lighten-4">최신 제품과 특별 할인을 만나보세요.</p>
          </div>
          <div class="col l4 offset-l2 s12">
            <h5 class="white-text">링크</h5>
            <ul>
              <li><a class="grey-text text-lighten-3" href="#">홈</a></li>
              <li><a class="grey-text text-lighten-3" href="#">카테고리</a></li>
              <li><a class="grey-text text-lighten-3" href="#">특가</a></li>
              <li><a class="grey-text text-lighten-3" href="#">고객센터</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          © 2024 모바일 커머스. All rights reserved.
        </div>
      </div>
    </footer>
  </div>
</template>
<script setup>
import HeaderComp from './components/HeaderComp.vue';
import CollectComp from './components/CollectComp.vue';
</script>
<style>
body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}
main {
  padding: 20px;
}
</style>  