<template>
  <DefaultLayout>
    <h3 class="center">{{ isEdit ? '과정 정보 수정' : '과정 등록' }}</h3><hr/>
    <form @submit.prevent="handleSubmit" style="padding-top: 20px">
      <div class="input-field">
        <input v-model="formData.title" type="text" id="title" required />
        <label for="title" class="active">과정명</label>
      </div>
      <div class="input-field">
        <textarea v-model="formData.description" id="description" class="materialize-textarea" required></textarea>
        <label for="description" class="active">과정 설명</label>
      </div>
      <div class="input-field">
        <input v-model="formData.lector" type="text" id="lector" required />
        <label for="lector" class="active">강사명</label>
      </div>
      <div class="input-field">
        <input v-model="formData.startDate" type="date" id="startDate" required />
        <label for="startDate" class="active">시작일</label>
      </div>
      <div class="input-field">
        <input v-model="formData.endDate" type="date" id="endDate" required />
        <label for="endDate" class="active">종료일</label>
        <input v-model="formData.instructorId" type="hidden" id="instructorId" required />
      </div>
      <div>
        <h4>과정 상세 정보</h4><hr/>
        <ul class="collection">
          <li v-for="n in [0, 1, 2, 3, 4]" :key="n">
            <h5>{{ n+1 }} 차시</h5>
            <span><input type="text" v-model="formInfo.topic[n]" placeholder="강의 제목 입력" required/></span>
            <span><textarea v-model="formInfo.details[n]" placeholder="강의 내용 입력" required></textarea></span>
            <span><input type="number" v-model="formInfo.durationHours[n]" placeholder="강의 시수 입력" /></span>
            <div class="btn">
              <input type="file" @change="onFileChange($event, n)" accept="video/*" required/>
            </div>
          </li>
        </ul>
      </div>
      <button class="btn waves-effect waves-light" type="submit">{{ isEdit ? '수정' : '등록' }}</button> &nbsp;
      
    </form>
  </DefaultLayout>
</template>
<script setup>
import { ref, onMounted, reactive, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import courseService from '@/services/courseService';
import { useUserStore, useCoursesStore } from '@/store';
const userStore = useUserStore();
const courseStore = useCoursesStore();
const router = useRouter();
const route = useRoute();
const isEdit = ref(route.params.id);
const user = computed(() => userStore.user);
const cour = computed(() => courseStore.cour);
const formData = ref({
  title: '',
  description: '',
  lector: '',
  startDate: '',
  endDate: '',
  instructorId: user.value.id,
});
const formInfo = ref({
  courseId: ['', '', '', '', ''],
  topic: ['', '', '', '', ''],
  details: ['', '', '', '', ''],
  durationHours: [0, 0, 0, 0, 0],
  mediafiles: [null, null, null, null, null],
});
const onFileChange = (event, index) => {
  formInfo.value.mediafiles[index] = event.target.files[0];
};
onMounted(async () => {
  const uname = localStorage.getItem('username');
  await userStore.fetchUser(uname);
  const userId = user.value.id;
  if (isEdit.value) {
    const course = await courseService.getCourseById(route.params.id);
    formData.value = {
      title: course.title,
      description: course.description,
      lector: course.lector,
      startDate: course.startDate,
      endDate: course.endDate,
      instructorId: userId
    };
    const courseInfos = await courseService.getCourseInfoListById(route.params.id);
    formInfo.value = {
      topic: courseInfos.map(info => info.topic),
      details: courseInfos.map(info => info.details),
      durationHours: courseInfos.map(info => info.durationHours),
      mediafiles: [null, null, null, null, null], // 미리 채워져 있는 파일 없음
    };
  }
});
async function handleSubmit() {
  const formSource = new FormData();
  if (isEdit.value) {
    await courseService.updateCourse(route.params.id, formData.value);
    for (let i = 0; i < 5; i++) {
      formSource.append('courseId', route.params.id);
      formSource.append('topic', formInfo.value.topic[i]);
      formSource.append('details', formInfo.value.details[i]);
      formSource.append('durationHour', formInfo.value.durationHours[i]);
      formSource.append('mediafile', formInfo.value.mediafiles[i]); // 올바른 형식으로 파일을 append
    }
    await courseService.updateCourseInfo(route.params.id, formSource);
    alert('과정 정보를 성공적으로 수정하였습니다!');
  } else {
    await courseService.createCourse(formData.value);
    await courseStore.fetchLastCourse();
    console.log("과정 아이디 출력");
    console.log(cour.value.id);
    for (let i = 0; i < 5; i++) {
      formSource.append('courseId', cour.value.id);
      formSource.append('topic', formInfo.value.topic[i]);
      formSource.append('details', formInfo.value.details[i]);
      formSource.append('durationHours', formInfo.value.durationHours[i]);
      formSource.append('mediafiles', formInfo.value.mediafiles[i]);
    }
    await courseService.createCourseInfo(formSource);
    alert('과정을 성공적으로 등록하였습니다!');
  }
  router.push('/courses');
}
</script>
<style scoped>
form {
  max-width: 600px;
  margin: 0 auto;
}
.collection li {
  padding: 8px;
}
.collection li input, .collection li textarea {
  padding: 8px;
}
</style>  