<template>
  <DefaultLayout>
    <div class="container">
      <h1 class="center">{{ course?.title }}</h1>
      <p>{{ course?.description }}</p>
      <p><strong>강사명</strong> : {{ course?.lector }}</p>
      <p><strong>시작일</strong> : {{ course?.start_date }}</p>
      <p><strong>종료일</strong> : {{ course?.end_date }}</p>
      <h5>과정 목차</h5>
      <ol>
        <li v-for="courseInfo in courseInfoList" :key="courseInfo.id" class="collection-item">
          {{ courseInfo.topic }}
        </li>
      </ol>
      <hr/>
      <div class="btn-group">
        <span v-if="isLoggedIn">
          <button type="button" v-if="isEnroll" class="btn blue waves-effect waves-light">현재 수강중</button> &nbsp; &nbsp;
          <router-link :to="`/reservations/new/${course.id}`" v-else class="btn green waves-effect waves-light">수강신청</router-link> &nbsp; 
        </span>
        <router-link to="/courses" class="btn waves-effect waves-light">과정 목록</router-link> &nbsp;
        <span v-if="isAdmin">
          <router-link :to="`/courses/edit/${course.id}`" class="btn waves-effect waves-light">과정 수정</router-link> &nbsp; 
          <button @click="deleteCourse" class="btn red waves-effect waves-light">과정 삭제</button>
        </span>
      </div>
    </div>
  </DefaultLayout>
</template>
<script setup>
import { onMounted, ref,computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import courseService from '@/services/courseService';
import { useUserStore, useAuthStore, useCoursesStore, useEnrollmentStore } from '@/store';
const userStore = useUserStore();
const authStore = useAuthStore();
const courseStore = useCoursesStore();
const enrollmentStore = useEnrollmentStore();
const course = ref({});
const router = useRouter();
const route = useRoute();
const courseId = route.params.id;
const role = localStorage.getItem('role');
const isAdmin = computed(() => role === 'ADMIN');
const isLoggedIn = computed(() => authStore.isLoggedIn);
const user = computed(() => userStore.user);
const courseInfoList = computed(() => courseStore.courseInfoList);
const isEnroll = computed(() => enrollmentStore.isEnroll);
console.log(isEnroll);
async function deleteCourse() {
  if (confirm('정말로 과정을 삭제하시겠습니까?')) {
    await courseService.deleteCourse(courseId);
    router.push('/courses');
  }
}
onMounted(async () => {
  course.value = await courseService.getCourseById(courseId);
  await courseStore.fetchCourseInfoListById(courseId);
  const uname = localStorage.getItem('username');
  await userStore.fetchUser(uname);
  const userId = user.value.id;
  await enrollmentStore.getEnrollmentByUserId(userId, courseId);
});
</script>
<style scoped>
p {
  font-size: 18px;
}
</style>  