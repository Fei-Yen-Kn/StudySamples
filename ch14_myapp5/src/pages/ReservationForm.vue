<template>
  <DefaultLayout>
    <h3 class="center">{{ isEdit ? '수강 예약 수정' : '수강 예약 신청' }}</h3><hr/>
    <form @submit.prevent="handleSubmit">
      <div class="input-field">
        <input v-model="formData.title" type="text" id="title" required readonly />
        <input v-model="formData.courseId" type="hidden" id="courseId" required />
        <label for="courseId" class="active">Course Name</label>
      </div>
      <div class="input-field">
        <input v-model="formData.studentName" type="text" id="studentName" required readonly />
        <input v-model="formData.studentId" type="hidden" id="studentId" required />
        <label for="studentId" class="active">Student Name</label>
      </div>
      <button class="btn waves-effect waves-light" type="submit">{{ isEdit ? '수강 예약 변경' : '수강 예약 신청' }}</button>
    </form>
  </DefaultLayout>
</template>
<script setup>
import { ref, onMounted, computed, watchEffect } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import reservationService from '@/services/reservationService';
import { useUserStore, useCoursesStore } from '@/store';
const router = useRouter();
const route = useRoute();
const isEdit = ref(!!route.params.id);
const userStore = useUserStore();
const courseStore = useCoursesStore();
const user = computed(() => userStore.user);
const course = computed(() => courseStore.course);

const formData = ref({
  title: '',
  courseId: route.params.courseId,
  studentName: '',
  studentId: '',
});

const sendData = ref({
  courseId: route.params.courseId,
  studentId: '',
});

onMounted(async () => {
  await courseStore.fetchCourse(route.params.courseId);
  const uname = localStorage.getItem('username');
  await userStore.fetchUser(uname);
  if (isEdit.value) {
    const reservation = await reservationService.getReservationById(route.params.courseid);
    formData.value = {
      courseId: reservation.courseId,
      studentId: reservation.studentId,
    };
  } else {
    formData.value = {
      title: course.title,
      courseId: course.id,
      studentId: user.id,
      studentName: user.name
    };
  }
});
async function handleSubmit() {
  SendData.value = {
    courseId: formData.value.courseId,
    studentId: formData.value.userId
  };
  if (isEdit.value) {
    await reservationService.updateReservation(route.params.id, sendData.value);
    alert('수강 정보 변경이 성공적으로 완료되었습니다.!');
  } else {
    await reservationService.createReservation(sendData.value);
    alert('수강 예약이 성공적으로 완료되었습니다.!');
  }
  router.push('/');
}
watchEffect(() => {
  if (course.value && user.value) {
    formData.value.courseId = course.value.id || '';
    formData.value.title = course.value.title || '';
    formData.value.studentId = user.value.id || '';
    formData.value.studentName = user.value.name || '';
  }
});
</script>
<style scoped>
form {
  max-width: 600px;
  margin: 0 auto;
}
</style>  