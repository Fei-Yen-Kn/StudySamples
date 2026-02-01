import LZString from 'lz-string';
import { defineStore } from 'pinia';
import { ref, watchEffect, computed } from 'vue';
import authService from '../services/authService';
import courseService from '../services/courseService';
import enrollmentService from '../services/enrollmentService';
import questionService from '../services/questionService';
import reservationService from '../services/reservationService';
import userService from '../services/userService';
import { useRouter } from 'vue-router';

const router = useRouter();

// 사용자 인증 관련 store
export const useAuthStore = defineStore('auth', () => {
  const user = ref(localStorage.getItem('user') || '');
  const authToken = ref(localStorage.getItem('authToken') || '');
  const isLoggedIn = computed(() => !!authToken.value);
  async function login(username, password) {
    try {
      const response = await authService.login(username); 
      if (!response || !response.password) {
        throw new Error('Invalid login response');
      }
      if (response.password === password) {
        authToken.value = response.token;
        localStorage.setItem('authToken', response.token); 
        user.value = response;
        localStorage.setItem('user', JSON.stringify(response));
        localStorage.setItem('username', response.username);
        localStorage.setItem('role', response.role);
        isLoggedIn.value = true; 
      } else {
        throw new Error('Incorrect password');
      }
    } catch (error) {
      console.error('Login error:', error.message); // 오류 메시지 확인
      throw error;
    }
  }

  // 로그아웃 시 호출되는 함수
  function logout() {
    authToken.value = '';
    user.value = null;
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    localStorage.removeItem('username');
    localStorage.removeItem('role');
    localStorage.clear();
  }

  watchEffect(() => {
    if (user.value) {
      localStorage.setItem('user', JSON.stringify(user.value));
    } else {
      localStorage.removeItem('user');
    }
  });

  return {
    user,
    authToken,
    isLoggedIn,
    login,
    logout,
  };
});

// 강의 관련 store
export const useCoursesStore = defineStore('courses', () => {
  const courses = ref([]);
  const course = ref({});
  const courseInfoList = ref([]);
  const cour = ref({});

  async function fetchCourses() {
    try {
      const response = await courseService.getAllCourses();
      courses.value = response; // 반환된 데이터를 courses에 저장
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  }
  
  async function fetchCourse(id) {
    course.value = await courseService.getCourseById(id);
  }

  async function fetchCourseInfoListById(courseId){
    courseInfoList.value = await courseService.getCourseInfoListById(courseId);
  }

  async function fetchLastCourse() {
    cour.value = await courseService.getLastCourse();
  }

  return {
    course,
    fetchCourse,
    courses,
    fetchCourses,
    courseInfoList,
    fetchCourseInfoListById,
    cour,
    fetchLastCourse,
  };
});

// 사용자 관련 store (추가)
export const useUserStore = defineStore('user', () => {
  const user = ref({});
  const users = ref([]);

  async function fetchUsers() {
    users.value = await userService.getAllUsers();
  }

  async function fetchUser(username) {
    user.value = await userService.getUser(username);
  }

  return {
    user,
    fetchUser,
    users,
    fetchUsers,
  };
});

export const useEnrollmentStore = defineStore('enrollment', () => {
  const enrollments = ref([]);
  const enrollment = ref({});
  const enroll = ref({});
  const enrolls = ref([]);
  const isEnroll = ref(false);

  async function fetchEnrollments() {
    enrollments.value = await enrollmentService.getAllEnrollments();
  }

  async function fetchEnrollmentById(id) {
    enrollment.value = await enrollmentService.getEnrollmentById(id);
  }

  async function getEnrollmentByUserId(studentId, courseId){
    try {
      enroll.value = await enrollmentService.getEnrollmentByStudentIdAndCourseId(studentId, courseId);
      isEnroll.value = enroll.value.length >= 1;  // `true` 설정
    } catch (error) {
      console.error('Enrollment fetch error:', error);
      isEnroll.value = false;  // 오류 발생 시 `false` 설정
    }
  }

  async function getEnrollmentsByCourseIdAndStudentId(studentId) {
    enrolls.value = await enrollmentService.getEnrollmentsByStudentId(studentId);
  }

  return {
    enrollments,
    fetchEnrollments,
    enrollment,
    fetchEnrollmentById,
    enroll,
    getEnrollmentByUserId,
    enrolls,
    getEnrollmentsByCourseIdAndStudentId,
    isEnroll
  };
});

export const useQuestionStore = defineStore('question', () => {
  const questions = ref([]);
  const question = ref(null);

  async function fetchQuestions() {
    questions.value = questionService.getAllQuestions();
  }

  async function fetchQuestion(id) {
    question.value = questionService.getQuestionById(id);
  }

  return {
    questions,
    fetchQuestions,
    question,
    fetchQuestion,
  };
});

export const useReservationStore = defineStore('reservation', () => {
  const reservations = ref([]);
  const reservation = ref(null);
  const res = ref([]);

  async function fetchReservations() {
    reservations.value = await reservationService.getAllReservations();
  }

  async function fetchReservation(id) {
    reservation.value = await reservationService.getReservationById(id);
  }

  async function getReaervationsByCourseIdAndStudentId(userId){
    res.value = await reservationService.getReservationsByStudentId(userId)
  }

  return {
    reservations,
    fetchReservations,
    reservation,
    fetchReservation,
    res,
    getReaervationsByCourseIdAndStudentId
  };
});