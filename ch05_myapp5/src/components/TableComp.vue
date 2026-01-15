<template>
  <div class="box">
    <div class="tabs is-boxed is-fullwidth">
      <ul>
        <li :class="{ 'is-active': activeTab === 'notices' }">
          <a @click="activeTab = 'notices'">
            <span class="icon is-small"><i class="fas fa-bullhorn" aria-hidden="true"></i></span>
            <span>공지사항</span>
          </a>
        </li>
        <li :class="{ 'is-active': activeTab === 'resources' }">
          <a @click="activeTab = 'resources'">
            <span class="icon is-small"><i class="fas fa-folder-open" aria-hidden="true"></i></span>
            <span>자료실</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="content">
      <div v-if="activeTab === 'notices'">
        <table class="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>#</th><th>제목</th><th>작성자</th><th>날짜</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(post, index) in notices" :key="post.id">
              <th>{{ index + 1 }}</th><td>{{ post.title }}</td>
              <td>{{ post.author }}</td><td>{{ post.date }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-if="activeTab === 'resources'">
        <table class="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>#</th><th>파일명</th>
              <th>작성자</th><th>날짜</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(resource, index) in resources" :key="resource.id">
              <th>{{ index + 1 }}</th><td>{{ resource.filename }}</td>
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
const activeTab = ref('notices');  // 활성 탭 상태
const notices = ref([  // 공지사항 데이터
  { id: 1, title: '포트폴리오 업데이트', author: '관리자', date: '2024-04-01' },
  { id: 2, title: '새 프로젝트 시작', author: '개발팀', date: '2024-04-05' },
  { id: 3, title: '기술 블로그 개설', author: '마케팅팀', date: '2024-04-10' }
]);
const resources = ref([  // 자료실 데이터
  { id: 1, filename: '프로젝트 계획서.pdf', author: '기획팀', date: '2024-03-25' },
  { id: 2, filename: '디자인 가이드.docx', author: '디자인팀', date: '2024-03-30' },
  { id: 3, filename: '기술 문서.pdf', author: '개발팀', date: '2024-04-02' }
]);
</script>
<style scoped>
.is-active a {
  background-color: #00d1b2;
  color: white;
}
</style>    