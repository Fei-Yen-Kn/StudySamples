<template>
  <div>
    <h2 class="pure-u-1 title">공지사항 목록</h2><hr/>
    <div class="table-wrapper">
      <table class="pure-table pure-table-bordered pure-table-striped" style="margin: 14px auto;">
        <thead>
          <tr>
            <th>제목</th><th>작성일시</th><th>조회수</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="notice in paginatedNotices" :key="notice.id" class="pure-menu-item">
            <td><router-link :to="`/notices/${notice.id}`" class="pure-menu-link">
              {{ notice.title }}
            </router-link></td>
            <td>{{ notice.created_at }}</td>
            <td>{{ notice.hits }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="pagination">
      <button 
        @click="changePage(currentPage - 1)" 
        :disabled="currentPage === 1"
        class="pure-button pure-button-primary"
      >Previous</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button 
        @click="changePage(currentPage + 1)" 
        :disabled="currentPage === totalPages"
        class="pure-button pure-button-primary"
      >Next</button>
    </div>
    <hr/>
    <!-- 새 글 작성 버튼 (관리자만) -->
    <div v-if="isAuthenticated"> 
      <router-link 
        v-if="user.role === 'ADMIN'" 
        to="/notices/new" 
        class="pure-button pure-button-primary" 
        style="float:right;"
      >새 글 작성</router-link>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue';
import { useNoticeStore } from '../store/useNoticeStore';
import { useAuthStore } from '../store/useAuthStore'; // 사용자 인증 스토어
const noticeStore = useNoticeStore();
const authStore = useAuthStore(); // 현재 사용자 정보 가져오기
const currentPage = ref(1);  // 현재 페이지 및 페이지네이션 관련 변수
const itemsPerPage = 5; // 한 페이지당 항목 수
const totalPages = computed(() => Math.ceil(noticeStore.notices.length / itemsPerPage));
onMounted(async() => {
  try {
    const username = localStorage.getItem('username');
    if (username) {
      await authStore.fetchUserProfile(username);
    } else {
      console.error('Username not found in localStorage.');
    }

  } catch (error) {
    console.error('Error loading data:', error);
  }
  await noticeStore.fetchNotices();
});

// 페이지 번호 변경
const changePage = (pageNumber) => {
  if (pageNumber < 1 || pageNumber > totalPages.value) return;
  currentPage.value = pageNumber;
};

// 페이지네이션된 항목 계산
const paginatedNotices = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return noticeStore.notices.slice(start, end);
});

const user = computed(() => authStore.user);
const isAuthenticated = computed(() => authStore.isAuthenticated);
</script>

<style scoped>
/* 테이블 Wrapper로 감싸서 마진을 설정 */
.table-wrapper {
  overflow-x: auto;
  margin-bottom: 20px;
}

/* 테이블에 보더, 스트라이프 효과 추가 */
.pure-table-bordered th, .pure-table-bordered td {
  text-align: center;
  padding: 10px;
}

.pure-table-striped tbody tr:nth-child(odd) {
  background-color: #f9f9f9;
}

/* 반응형 테이블 */
@media (max-width: 768px) {
  .pure-table th, .pure-table td {
    display: block;
    width: 100%;
    box-sizing: border-box;
  }

  .pure-table th {
    text-align: left;
    background-color: #f4f4f4;
    padding-left: 10px;
  }

  .pure-table td {
    text-align: left;
    padding-left: 10px;
    border-top: 1px solid #ddd;
  }

  .pure-table td:before {
    content: attr(data-label);
    font-weight: bold;
    padding-right: 10px;
    display: inline-block;
  }

  /* 테이블 헤더가 너무 길어지지 않도록 줄이기 */
  .pure-table th, .pure-table td {
    padding: 8px 10px;
  }
}

/* 페이지네이션 버튼 스타일 */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.pagination button {
  margin: 0 10px;
  padding: 5px 15px;
}

.pagination span {
  margin: 0 10px;
  font-weight: bold;
}
</style>