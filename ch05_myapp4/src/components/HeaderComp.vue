<template>
  <nav class="navbar navbar-fixed">
    <div class="nav-wrapper teal">
      <a href="#" class="brand-logo" style="padding-left: 20px;">
        <img src="@/assets/logo.png" alt="Logo" style="height: 50px;">
      </a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger">
        <i class="material-icons">menu</i>
      </a>
      <ul class="right hide-on-med-and-down">
        <li><a href="#">홈</a></li>
        <li>
          <a class="dropdown-trigger" href="#" data-target="dropdown1">카테고리</a>
          <ul id="dropdown1" class="dropdown-content">
            <li><a href="#">카테고리 1</a></li>
            <li><a href="#">카테고리 2</a></li>
            <li><a href="#">카테고리 3</a></li>
          </ul>
        </li>
        <li><a href="#">특가</a></li>
        <li><a href="#">고객센터</a></li>
        <li>
          <a href="#">장바구니 <i class="material-icons">shopping_cart</i></a>
        </li>
      </ul>
    </div>

    <!-- 모바일용 사이드 네비게이션 -->
    <ul class="sidenav" id="mobile-demo">
      <li><a href="#">홈</a></li>
      <li>
        <a href="#">카테고리</a>
        <ul class="collapsible collapsible-accordion">
          <li>
            <a class="collapsible-header">카테고리 1</a>
            <div class="collapsible-body">
              <ul>
                <li><a href="#">세부 카테고리 1</a></li>
                <li><a href="#">세부 카테고리 2</a></li>
              </ul>
            </div>
          </li>
          <li>
            <a class="collapsible-header">카테고리 2</a>
            <div class="collapsible-body">
              <ul>
                <li><a href="#">세부 카테고리 1</a></li>
                <li><a href="#">세부 카테고리 2</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </li>
      <li><a href="#">특가</a></li>
      <li><a href="#">고객센터</a></li>
      <li><a href="#">장바구니 <i class="material-icons">shopping_cart</i></a></li>
    </ul>
  </nav>
</template>

<script setup>
import { onMounted } from 'vue';
import M from 'materialize-css';

onMounted(() => {
  // 사이드바 초기화
  const sidenavElems = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sidenavElems);

  // 드롭다운 초기화
  const dropdownElems = document.querySelectorAll('.dropdown-trigger');
  M.Dropdown.init(dropdownElems, {
    coverTrigger: false,
    constrainWidth: false,
  });

  // 콜랩시블 초기화 (모바일)
  const collapsibleElems = document.querySelectorAll('.collapsible');
  M.Collapsible.init(collapsibleElems);
});
</script>

<style scoped>
.brand-logo img {
  height: 50px;
}
.navbar a {
  font-size: 1.1rem;
}
.dropdown-content li a {
  color: #212121;
}
.dropdown-content li a:hover {
  background-color: #f2f2f2;
}
.sidenav a {
  font-size: 1rem;
}
</style>