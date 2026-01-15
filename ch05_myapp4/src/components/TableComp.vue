<template>
  <div class="card">
    <div class="card-content">
      <ul class="tabs"><!-- 탭 네비게이션 -->
        <li class="tab col s4">
          <a href="#notices" class="active" @click.prevent="activeTab = 'notices'">공지사항</a>
        </li>
        <li class="tab col s4">
          <a href="#resources" @click.prevent="activeTab = 'resources'">자료실</a>
        </li>
       </ul>
      <div id="notices" class="col s12" v-if="activeTab === 'notices'">  <!-- 탭 콘텐츠 -->
        <table class="striped responsive-table">
          <thead>
            <tr>
              <th>#</th><th>제목</th><th>작성자</th><th>날짜</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(notice, index) in notices" :key="notice.id">
              <td>{{ index + 1 }}</td><td>{{ notice.title }}</td>
              <td>{{ notice.author }}</td><td>{{ notice.date }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="resources" class="col s12" v-if="activeTab === 'resources'">
        <table class="striped responsive-table">
          <thead>
            <tr>
              <th>#</th><th>파일명</th><th>작성자</th><th>날짜</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(resource, index) in resources" :key="resource.id">
              <td>{{ index + 1 }}</td><td>{{ resource.filename }}</td>
              <td>{{ resource.author }}</td><td>{{ resource.date }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const activeTab = ref('notices');	// 활성 탭 상태
const notices = ref([   // 공지사항 데이터
  { id: 1, title: '신제품 출시 안내', author: '관리자', date: '2024-04-01' },
  { id: 2, title: '시스템 점검 공지', author: 'IT팀', date: '2024-04-05' },
  { id: 3, title: '할인 이벤트 시작', author: '마케팅팀', date: '2024-04-10' }
]);
const resources = ref([		// 자료실 데이터
  { id: 1, filename: '제품 카탈로그.pdf', author: '기획팀', date: '2024-03-25' },
  { id: 2, filename: '마케팅 자료.pptx', author: '마케팅팀', date: '2024-03-30' },
  { id: 3, filename: '개발 문서.docx', author: '개발팀', date: '2024-04-02' }
]);
</script>
<style scoped>
.tabs .tab a.active {
  background-color: #26a69a;
  color: white;
}
</style>    