<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="@/assets/logo.png" alt="Logo" width="30" height="30" class="d-inline-block align-top">
        My Admin</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMain" aria-controls="navbarMain" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarMain">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="menu1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              메뉴1</a>
            <ul class="dropdown-menu" aria-labelledby="menu1">
              <li><a class="dropdown-item" href="#">서브메뉴1-1</a></li>
              <li><a class="dropdown-item" href="#">서브메뉴1-2</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="menu2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              메뉴2
            </a>
            <ul class="dropdown-menu" aria-labelledby="menu2">
              <li><a class="dropdown-item" href="#">서브메뉴2-1</a></li>
              <li><a class="dropdown-item" href="#">서브메뉴2-2</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="검색" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">검색</button>
        </form>
      </div>
    </div>
  </nav>
</template>
<script setup>
</script>