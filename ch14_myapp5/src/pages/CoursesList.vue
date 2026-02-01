<template>
  <DefaultLayout>
    <h3 class="center">강의 과정 목록</h3><hr/>
    <div class="container">
      <ul class="collection">
        <li><strong class="column1">과정명</strong><strong class="column2">개강일</strong></li>
        <li v-for="course in courses" :key="course.id" class="collection-item">
          <span class="column1">
            <router-link :to="`/courses/${course.id}`" v-if="isLoggedIn">{{ course.title }}</router-link>
            <span v-else>{{ course.title }}</span>
          </span>
          <span class="column2">{{ course.startDate }}</span>
        </li>
      </ul>
      <!-- role이 ADMIN인 경우에만 버튼 표시 -->
      <router-link 
        v-if="isAdmin" 
        to="/courses/new" 
        class="btn waves-effect waves-light">
        강의 과정 등록
      </router-link>
    </div>  
  </DefaultLayout>
</template>
<script setup>
import { onMounted, computed } from 'vue';
import { useCoursesStore, useUserStore, useAuthStore } from '@/store';
const coursesStore = useCoursesStore();
const userStore = useUserStore();
const authStore = useAuthStore();
const courses = computed(() => coursesStore.courses);
const isLoggedIn = computed(() => authStore.authToken);
const role = localStorage.getItem('role');
const isAdmin = computed(() => role === 'ADMIN');
onMounted(async () => {
  await coursesStore.fetchCourses();
  const username = localStorage.getItem('username');
  await userStore.fetchUser(username);
});
</script>
  <style scoped>
  ul {
    margin-top: 20px;
  }
  .column1 {
    display: block;
    width: calc(100% - 120px);
    float:left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    box-sizing: border-box;
    line-height: 24px;
  }
  .column2 {
    display: block;
    float:right;
    width: 120px;
    text-align: center;
    box-sizing: border-box;
    line-height: 24px;
  }
  strong {
    font-weight: bold;
    padding: 10px 20px;
    border-bottom: 1px solid #333;
    line-height: 20px;
  }
  li {
    line-height: 24px;
  }
  li:after {
    content:"";
    display:block;
    clear:both;
  }
  </style>