import { ref } from 'vue';

export const users = ref([
  { id: 1, username: 'student1', password: '1111', email: 'student1@example.com', name: '홍길동', role: 'STUDENT', token:'$2a$10$HzP8HxPpD6pOz5D8P2FOTuTbmkYQf5ymv6RI.Z6LIMeGv4jQmK04W' },
  { id: 2, username: 'student2', password: '2222', email: 'student2@example.com', name: '성춘향', role: 'STUDENT', token:'$2a$10$N9nnr8ZYuTz/kCnT1ecqBO9qB1m69/3OUoHz9XaEnD6Tl0TpnAwS.' },
  { id: 3, username: 'instructor1', password: '3333', email: 'instructor1@example.com', name: '김과장', role: 'INSTRUCTOR', token:'$2a$10$e6N9cPZ4bgW6f.xKaRQExeMvA9dTmd1T4OnbSiWBn4GjSTiVsGq/i' },
  { id: 4, username: 'instructor2', password: '4444', email: 'instructor2@example.com', name: '박대리', role: 'INSTRUCTOR', token:'$2a$10$VVRXHd5kGV6fl5v8nJ/mS.dHXBmcC7/hV3Inl/qe6U6Jh8zA1U2AC' },
  { id: 5, username: 'admin', password: '1234', email: 'admin1@example.com', name: '관리자', role: 'ADMIN', token:'$2a$10$YCM9P5nGGfS1kz/XNOM3OuEobHdBjdjwiNBkzXc8Bt4nmHrb3pUka' }
]);

export const courses = ref([
  { id: 1, instructor_id: 3, title: '기초 수학', description: '기초 수학을 배우는 과정입니다.', lector: '김수학', start_date: '2024-01-01', end_date: '2024-03-01' },
  { id: 2, instructor_id: 3, title: '고급 수학', description: '고급 수학을 배우는 과정입니다.', lector: '고수학', start_date: '2024-03-15', end_date: '2024-06-15' },
  { id: 3, instructor_id: 4, title: '기초 물리', description: '기초 물리학을 배우는 과정입니다.', lector: '박물리', start_date: '2024-02-01', end_date: '2024-04-01' },
  { id: 4, instructor_id: 4, title: '고급 물리', description: '고급 물리학을 배우는 과정입니다.', lector: '서물리', start_date: '2024-05-01', end_date: '2024-08-01' },
  { id: 5, instructor_id: 3, title: '프로그래밍 입문', description: '초보자를 위한 프로그래밍 강의입니다.', lector: '송전산', start_date: '2024-01-15', end_date: '2024-04-15' }
]);

export const courseInfo = ref([
  { id: 1, course_id: 1, topic: '정수와 소수', details: '정수와 소수의 기본 개념을 학습합니다.', duration_hours: 3, mediafile: 'math_basic1.mp4' },
  { id: 2, course_id: 1, topic: '기본 연산', details: '덧셈, 뺄셈, 곱셈, 나눗셈을 학습합니다.', duration_hours: 5, mediafile: 'math_basic2.mp4' },
  { id: 3, course_id: 2, topic: '미분', details: '미분의 개념과 활용을 학습합니다.', duration_hours: 6, mediafile: 'math_expert1.mp4' },
  { id: 4, course_id: 3, topic: '운동의 법칙', details: '기본 운동의 법칙을 학습합니다.', duration_hours: 5, mediafile: 'physical_basic1.mp4' },
  { id: 5, course_id: 5, topic: '변수와 자료형', details: '프로그래밍에서 변수와 자료형을 학습합니다.', duration_hours: 4, mediafile: 'pg1.mp4' },
  { id: 6, course_id: 1, topic: '방정식 기초', details: '기본 방정식 풀이를 학습합니다.', duration_hours: 4, mediafile: 'math_basic3.mp4' },
  { id: 7, course_id: 1, topic: '기하학 기초', details: '기하학의 기본 개념을 학습합니다.', duration_hours: 6, mediafile: 'math_basic4.mp4' },
  { id: 8, course_id: 1, topic: '확률과 통계', details: '확률과 통계의 기본 개념을 학습합니다.', duration_hours: 3, mediafile: 'math_basic5.mp4' },
  { id: 9, course_id: 2, topic: '적분', details: '적분의 개념과 활용을 학습합니다.', duration_hours: 6, mediafile: 'math_expert2.mp4' },
  { id: 10, course_id: 2, topic: '복소수', details: '복소수의 개념과 연산을 학습합니다.', duration_hours: 4, mediafile: 'math_expert3.mp4' },
  { id: 11, course_id: 2, topic: '행렬과 벡터', details: '행렬과 벡터의 연산을 학습합니다.', duration_hours: 5, mediafile: 'math_expert4.mp4' },
  { id: 12, course_id: 2, topic: '고급 기하학', details: '고급 기하학 개념을 학습합니다.', duration_hours: 7, mediafile: 'math_expert5.mp4' },
  { id: 13, course_id: 3, topic: '에너지와 일', details: '에너지와 일의 개념을 학습합니다.', duration_hours: 4, mediafile: 'physical_basic2.mp4' },
  { id: 14, course_id: 3, topic: '파동과 소리', details: '파동과 소리의 기초 개념을 학습합니다.', duration_hours: 6, mediafile: 'physical_basic3.mp4' },
  { id: 15, course_id: 3, topic: '열역학 기초', details: '열역학의 기본 개념을 학습합니다.', duration_hours: 4, mediafile: 'physical_basic4.mp4' },
  { id: 16, course_id: 3, topic: '기본 전자기학', details: '전자기학의 기본 개념을 학습합니다.', duration_hours: 6, mediafile: 'physical_basic5.mp4' },
  { id: 17, course_id: 4, topic: '양자역학', details: '양자역학의 기본 개념을 학습합니다.', duration_hours: 8, mediafile: 'physical_expert1.mp4'  },
  { id: 18, course_id: 4, topic: '상대성이론', details: '상대성이론의 기본 개념을 학습합니다.', duration_hours: 8, mediafile: 'physical_expert2.mp4'  },
  { id: 19, course_id: 4, topic: '고급 전자기학', details: '고급 전자기학의 개념을 학습합니다.', duration_hours: 7, mediafile: 'physical_expert3.mp4'  },
  { id: 20, course_id: 4, topic: '고급 열역학', details: '고급 열역학 개념을 학습합니다.', duration_hours: 6, mediafile: 'physical_expert4.mp4'  },
  { id: 21, course_id: 4, topic: '고급 파동 이론', details: '파동 이론의 심화 개념을 학습합니다.', duration_hours: 6, mediafile: 'physical_expert5.mp4'  },
  { id: 22, course_id: 5, topic: '조건문과 반복문', details: '조건문과 반복문의 사용법을 학습합니다.', duration_hours: 5, mediafile: 'pg2.mp4'  },
  { id: 23, course_id: 5, topic: '함수와 메서드', details: '함수와 메서드의 개념과 작성 방법을 학습합니다.', duration_hours: 5, mediafile: 'pg3.mp4' },
  { id: 24, course_id: 5, topic: '데이터 구조 기초', details: '리스트, 배열, 맵 등의 기본 개념을 학습합니다.', duration_hours: 6, mediafile: 'pg4.mp4' },
  { id: 25, course_id: 5, topic: '객체지향 프로그래밍', details: '객체지향 프로그래밍의 기본 개념을 학습합니다.', duration_hours: 6, mediafile: 'pg5.mp4' }
]);

export const enrollments = ref([
  { id: 1, course_id: 1, student_id: 1 },
  { id: 2, course_id: 2, student_id: 1 },
  { id: 3, course_id: 3, student_id: 2 },
  { id: 4, course_id: 4, student_id: 2 },
  { id: 5, course_id: 5, student_id: 1 }
]);

export const reservations = ref([
  { id: 1, course_id: 1, student_id: 2, status: 'RESERVED' },
  { id: 2, course_id: 2, student_id: 2, status: 'RESERVED' },
  { id: 3, course_id: 3, student_id: 1, status: 'RESERVED' }
]);

export const questions = ref([
  { id: 1, course_id: 1, question_text: '2 + 2는 무엇인가요?', answer: '4' },
  { id: 2, course_id: 1, question_text: '3 x 3은 무엇인가요?', answer: '9' },
  { id: 3, course_id: 2, question_text: '미분의 정의는 무엇인가요?', answer: '변화율' },
  { id: 4, course_id: 3, question_text: '뉴턴의 제1법칙은 무엇인가요?', answer: '관성의 법칙' },
  { id: 5, course_id: 5, question_text: '변수란 무엇인가요?', answer: '데이터를 저장하기 위한 공간' }
]);

export const getUsers = () => users.value;
export const getUser = (username) => users.value.find(user => user.username === username);
export const getUserById = (id) => users.value.find(user => user.id === parseInt(id));
export const getLastCourse = () => { return courses.value[courses.value.length - 1]; };
export const getUserByEmail = (email) => users.value.find(user => user.email === email);
export const addUser = (user) => users.value.push(user);
export const editUser = (id, updatedUser) => {
  const index = users.value.findIndex(user => user.id === parseInt(id));
  if (index !== -1) {
    users.value[index] = { ...users.value[index], ...updatedUser };
  }
};
export const deleteUser = (id) => {
  users.value = users.value.filter(user => user.id !== parseInt(id));
};

export const getCourses = () => courses.value;
export const getCourseById = (id) => courses.value.find(course => course.id === parseInt(id));
export const addCourse = (course) => courses.value.push(course);
export const editCourse = (id, updatedCourse) => {
  const index = courses.value.findIndex(course => course.id === parseInt(id));
  if (index !== -1) {
    courses.value[index] = { ...courses.value[index], ...updatedCourse };
  }
};
export const deleteCourse = (id) => {
  courses.value = courses.value.filter(course => course.id !== parseInt(id));
};

export const getCourseInfos = () => courseInfo.value;
export const getCourseInfoById = (id) => courseInfo.value.find(info => info.id === parseInt(id));
export const getCourseInfoListById = (courseId) => courseInfo.value.filter(info => (info.course_id == parseInt(courseId)));
export const addCourseInfo = (info) => courseInfo.value.push(info);
export const editCourseInfo = (id, updatedInfo) => {
  const index = courseInfo.value.findIndex(info => info.id === parseInt(id));
  if (index !== -1) {
    courseInfo.value[index] = { ...courseInfo.value[index], ...updatedInfo };
  }
};
export const deleteCourseInfo = (id) => {
  courseInfo.value = courseInfo.value.filter(info => info.id !== parseInt(id));
};

export const getEnrollments = () => {
  return enrollments.value.map(enrollment => {
    const user = users.value.find(user => user.id === enrollment.student_id);
    const course = courses.value.find(course => course.id === enrollment.course_id);

    return {
      ...enrollment,
      student_name: user ? user.name : 'Unknown',
      course_title: course ? course.title : 'Unknown'
    };
  });
};
export const getEnrollmentByStudentIdAndCourseId = (studentId, courseId) => {
  return enrollments.value
    .filter(enrollment => 
      enrollment.student_id === parseInt(studentId) && 
      enrollment.course_id === parseInt(courseId)
    )
    .map(enrollment => {
      const user = users.value.find(user => user.id === enrollment.student_id);
      const course = courses.value.find(course => course.id === enrollment.course_id);

      return {
        ...enrollment,
        student_name: user ? user.name : 'Unknown',
        course_title: course ? course.title : 'Unknown'
      };
    });
};
export const getEnrollmentsByStudentId = (studentId) => {
  return enrollments.value
    .filter(enrollment => enrollment.student_id === parseInt(studentId)) // 필터 조건
    .map(enrollment => {
      const user = users.value.find(user => user.id === enrollment.student_id);
      const course = courses.value.find(course => course.id === enrollment.course_id);
      return {
        ...enrollment,
        student_name: user ? user.name : 'Unknown', // student_name 추가
        course_title: course ? course.title : 'Unknown' // course_title 추가
      };
    });
};
export const getEnrollmentById = (id) => {
  const enrollment = enrollments.value.find(enrollment => enrollment.id === parseInt(id)); // 기본 조건으로 enrollment을 찾음
  if (enrollment) {
    const user = users.value.find(user => user.id === enrollment.student_id);
    const course = courses.value.find(course => course.id === enrollment.course_id);
    return {
      ...enrollment,
      student_name: user ? user.name : 'Unknown', // student_name 추가
      course_title: course ? course.title : 'Unknown' // course_title 추가
    };
  }
  return null; // enrollment이 없으면 null 반환
};
export const getEnrollmentsByCourseId = (courseId) => {
  return enrollments.value
    .filter(enrollment => enrollment.course_id === parseInt(courseId)) // course_id로 필터링
    .map(enrollment => {
      const course = courses.value.find(course => course.id === enrollment.course_id);
      const user = users.value.find(user => user.id === enrollment.student_id);
      return {
        ...enrollment,
        course_title: course ? course.title : 'Unknown', // course_title 추가
        student_name: user ? user.name : 'Unknown' // student_name 추가
      };
    });
};
export const addEnrollment = (enrollment) => enrollments.value.push(enrollment);
export const editEnrollment = (id, updatedEnrollment) => {
  const index = enrollments.value.findIndex(enrollment => enrollment.id === parseInt(id));
  if (index !== -1) {
    enrollments.value[index] = { ...enrollments.value[index], ...updatedEnrollment };
  }
};
export const deleteEnrollment = (id) => {
  enrollments.value = enrollments.value.filter(enrollment => enrollment.id !== parseInt(id));
};

export const getReservations = () => {
  return reservations.value.map(reservation => {
    const user = users.value.find(user => user.id === reservation.student_id);
    const course = courses.value.find(course => course.id === reservation.course_id);

    return {
      ...reservation,
      student_name: user ? user.name : 'Unknown',
      course_title: course ? course.title : 'Unknown'
    };
  });
};
export const getReservationById = (id) => {
  const reservation = reservations.value.find(reservation => reservation.id === parseInt(id)); // 예약을 찾음
  if (reservation) {
    const user = users.value.find(user => user.id === reservation.student_id);
    const course = courses.value.find(course => course.id === reservation.course_id);
    return {
      ...reservation,
      student_name: user ? user.name : 'Unknown', // student_name 추가
      course_title: course ? course.title : 'Unknown' // course_title 추가
    };
  }
  return null; // 예약이 없으면 null 반환
};
export const getReservationsByCourseId = (courseId) => {
  return reservations.value
    .filter(reservation => reservation.course_id === parseInt(courseId)) // course_id와 일치하는 예약 필터링
    .map(reservation => {
      const user = users.value.find(user => user.id === reservation.student_id);
      const course = courses.value.find(course => course.id === reservation.course_id);

      return {
        ...reservation,
        student_name: user ? user.name : 'Unknown', // student_name 추가
        course_title: course ? course.title : 'Unknown' // course_title 추가
      };
    });
};
export const getReservationsByStudentId = (studentId) => {
  return reservations.value
    .filter(reservation => reservation.student_id === parseInt(studentId)) // student_id와 일치하는 예약 필터링
    .map(reservation => {
      const user = users.value.find(user => user.id === reservation.student_id);
      const course = courses.value.find(course => course.id === reservation.course_id);

      return {
        ...reservation,
        student_name: user ? user.name : 'Unknown', // student_name 추가
        course_title: course ? course.title : 'Unknown' // course_title 추가
      };
    });
};
export const getReaervationsByCourseIdAndStudentId = (courseId, studentId) => {
  return reservations.value
    .filter(reservation => reservation.course_id === parseInt(courseId) && reservation.student_id === parseInt(studentId)) // 기본 필터 조건
    .map(reservation => {
      const user = users.value.find(user => user.id === reservation.student_id);
      const course = courses.value.find(course => course.id === reservation.course_id);
      return {
        ...reservation,
        student_name: user ? user.name : 'Unknown', // student_name 추가
        course_title: course ? course.title : 'Unknown' // course_title 추가
      };
    });
};
export const addReservation = (reservation) => reservations.value.push(reservation);
export const editReservation = (id, updatedReservation) => {
  const index = reservations.value.findIndex(reservation => reservation.id === parseInt(id));
  if (index !== -1) {
    reservations.value[index] = { ...reservations.value[index], ...updatedReservation };
  }
};
export const deleteReservation = (id) => {
  reservations.value = reservations.value.filter(reservation => reservation.id !== parseInt(id));
};

export const getQuestions = () => questions.value;
export const getQuestionById = (id) => questions.value.find(question => question.id === parseInt(id));
export const getQuestionsByCourseId = (courseId) => questions.value.find(question => question.course_id === parseInt(courseId));
export const addQuestion = (question) => questions.value.push(question);
export const editQuestion = (id, updatedQuestion) => {
  const index = questions.value.findIndex(question => question.id === parseInt(id));
  if (index !== -1) {
    questions.value[index] = { ...questions.value[index], ...updatedQuestion };
  }
};
export const deleteQuestion = (id) => {
  questions.value = questions.value.filter(question => question.id !== parseInt(id));
};
/*
export default {
  getUsers, getUser, getUserById, getUserByEmail, addUser, editUser, deleteUser,
  getCourses, getCourseById, addCourse, editCourse, deleteCourse, getLastCourse, 
  getCourseInfos, getCourseInfoById, addCourseInfo, editCourseInfo, deleteCourseInfo,
  getCourseInfoListById, getEnrollments, getEnrollmentByStudentIdAndCourseId, 
  getEnrollmentsByStudentId, getEnrollmentById, addEnrollment, editEnrollment, 
  deleteEnrollment, getEnrollmentsByCourseId, getReservations, getReservationById, 
  addReservation, editReservation, deleteReservation, getReservationsByCourseId, 
  getReservationsByStudentId, getReaervationsByCourseIdAndStudentId,
  getQuestions, getQuestionById, addQuestion, editQuestion, deleteQuestion, 
  getQuestionsByCourseId
}; getReaervationsByCourseIdAndStudentId */