<template>
  <div>
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link active" id="notice-tab" data-bs-toggle="tab" data-bs-target="#notice" type="button" role="tab" aria-controls="notice" aria-selected="true">공지사항</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="resources-tab" data-bs-toggle="tab" data-bs-target="#resources" type="button" role="tab" aria-controls="resources" aria-selected="false">자료실</button>
      </li>
     </ul>
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active" id="notice" role="tabpanel" aria-labelledby="notice-tab">
        <table class="table table-striped mt-3">
          <thead>
            <tr>
              <th>#</th><th>제목</th><th>작성자</th><th>날짜</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(post, index) in notices" :key="post.id">
              <th scope="row">{{ index + 1 }}</th><td>{{ post.title }}</td>
              <td>{{ post.author }}</td><td>{{ post.date }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="tab-pane fade" id="resources" role="tabpanel" aria-labelledby="resources-tab">
        <table class="table table-striped mt-3">
          <thead>
            <tr>
              <th>#</th><th>파일명</th><th>작성자</th><th>날짜</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(resource, index) in resources" :key="resource.id">
              <th scope="row">{{ index + 1 }}</th><td>{{ resource.filename }}</td>
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
const notices = ref([  // 공지사항 데이터
  { id: 1, title: '시스템 점검 안내', author: '관리자', date: '2024-04-01' },
  { id: 2, title: '새로운 기능 출시', author: '개발팀', date: '2024-04-05' },
  { id: 3, title: '업데이트 일정', author: '운영팀', date: '2024-04-10' }
]);
const resources = ref([  // 자료실 데이터
  { id: 1, filename: '프로젝트 계획서.pdf', author: '기획팀', date: '2024-03-25' },
  { id: 2, filename: '디자인 가이드.docx', author: '디자인팀', date: '2024-03-30' },
  { id: 3, filename: '테스트 케이스.xlsx', author: 'QA팀', date: '2024-04-02' }
]);
</script>
<style scoped>
.table {
  margin-top: 20px;
}
</style>
    