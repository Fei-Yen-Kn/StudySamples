<template>
  <DefaultLayout>
    <div class="container">
      <h3 class="center">수강 예약 내역</h3><hr/>
      <div v-if="isAdmin">
        <table class="table">
          <thead>
            <tr><th>예약번호</th><th>수강 과정</th><th>수강생</th><th>상태관리</th></tr>
          </thead>
          <tbody>
            <tr v-for="reservation in reserves" :key="reservation.id" class="collection-item">
              <td>{{ reservation.id }}</td>
              <td><router-link :to="`/enrollments/${reservation.id}`">{{ reservation.course_title }}</router-link></td>
              <td>{{ reservation.student_name }}</td>
              <td>
                <span v-if="reservation.status === 'RESERVED'">예약중
                  &nbsp; &nbsp; 
                  <button @click="deleteHandle(reservation.id)" class="btn red waves-effect waves-light">예약 취소</button>
                </span>
                <span v-else>취소됨</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else>
        <ul class="collection">
          <li v-for="reservation in res" :key="reservation.id" class="collection-item">
            <router-link :to="`/reservations/${reservation.id}`">{{ reservation.course_title }}</router-link> &nbsp; &nbsp; 
            <span v-if="reservation.status === 'RESERVED'">
              예약됨 &nbsp; &nbsp; &nbsp;
              <button @click="deleteHandle(reservation.id)" class="btn red waves-effect waves-light">취소 신청</button>
            </span>
            <span v-else-if="reservation.status === 'CANCELLED'">취소됨</span>
            <span v-else>확인중</span>
          </li>
        </ul>
        <p v-if="(res.length < 1)">해당 강의 예약 데이터가 존재하지 않습니다.</p>
      </div>
      <hr>
      <router-link to="/courses" class="btn waves-effect waves-light">수강 신청</router-link>
    </div>  
  </DefaultLayout>
</template>
<script setup>
import { onMounted, computed, ref } from 'vue';
import { useReservationStore, useUserStore } from '@/store';
import reservationService from '@/services/reservationService';
const reservationStore = useReservationStore();
const userStore = useUserStore();
const reserves = computed(() => reservationStore.reservations);
const res = computed(() => reservationStore.res);
const user = computed(() => userStore.user);
const role = localStorage.getItem('role');
const isAdmin = computed(() => role === 'ADMIN');
onMounted(async () => {
  const username = localStorage.getItem("username");
  await userStore.fetchUser(username);
  const userId = user.value.id;
  await reservationStore.getReaervationsByCourseIdAndStudentId(userId);
  await reservationStore.fetchReservations();
  console.log(reserves.value);
});
async function deleteHandle(id){
  try {
    await reservationService.deleteReservation(id);
    console.log(`Reservation with ID ${id} deleted`);
    const userId = user.value.id;
    await reservationStore.getReaervationsByCourseIdAndStudentId(userId);
  } catch (error) {
    console.error("Failed to delete reservation:", error);
  }
}
</script>
<style scoped>
ul {
  margin-top: 20px;
}
</style>  