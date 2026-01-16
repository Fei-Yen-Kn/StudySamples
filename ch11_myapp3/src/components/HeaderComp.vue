<template>
  <header>
    <nav>
      <div class="nav-wrapper blue">
        <div class="container">
          <router-link to="/" class="brand-logo">Movie Review</router-link>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger">
            <i class="material-icons">menu</i>
          </a>
          <ul class="right hide-on-med-and-down">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/movies">영화 목록</router-link></li>
            <li><router-link to="/reviews">리뷰 목록</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
    <ul class="sidenav" id="mobile-demo">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/movies">영화 목록</router-link></li>
      <li><router-link to="/reviews">리뷰 목록</router-link></li>
    </ul>
  </header>
</template>

<script setup>
import { onMounted } from "vue";
import M from "materialize-css";

onMounted(() => {
  const elems = document.querySelectorAll(".sidenav");
  M.Sidenav.init(elems);
});
</script>
