<template>
  <div class="bg-white p-6 rounded-lg shadow-md">
    <ul class="flex border-b">
      <li class="-mb-px mr-1">
        <button @click="activeTab = 'notices'" :class="tabClass('notices')" class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold">
          공지사항
        </button>
      </li>
      <li class="mr-1">
        <button @click="activeTab = 'resources'" :class="tabClass('resources')" class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold">
          자료실
        </button>
      </li>
     </ul>
    <div class="mt-4">
      <div v-if="activeTab === 'notices'">
        <table class="min-w-full bg-white">
          <thead>
            <tr>
              <th class="py-2 px-4 border-b">#</th><th class="py-2 px-4 border-b">제목</th>
              <th class="py-2 px-4 border-b">작성자</th><th class="py-2 px-4 border-b">날짜</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(post, index) in notices" :key="post.id" class="text-center">
              <td class="py-2 px-4 border-b">{{ index + 1 }}</td><td class="py-2 px-4 border-b">{{ post.title }}</td>
              <td class="py-2 px-4 border-b">{{ post.author }}</td><td class="py-2 px-4 border-b">{{ post.date }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-if="activeTab === 'resources'">
        <table class="min-w-full bg-white">
          <thead>
            <tr>
              <th class="py-2 px-4 border-b">#</th><th class="py-2 px-4 border-b">파일명</th>
              <th class="py-2 px-4 border-b">작성자</th><th class="py-2 px-4 border-b">날짜</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(resource, index) in resources" :key="resource.id" class="text-center">
              <td class="py-2 px-4 border-b">{{ index + 1 }}</td><td class="py-2 px-4 border-b">{{ resource.filename }}</td>
              <td class="py-2 px-4 border-b">{{ resource.author }}</td><td class="py-2 px-4 border-b">{{ resource.date }}</td>
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
const notices = ref([ // 공지사항 데이터
  { id: 1, title: '시스템 점검 안내', author: '관리자', date: '2024-04-01' },
  { id: 2, title: '새로운 기능 출시', author: '개발팀', date: '2024-04-05' },
  { id: 3, title: '업데이트 일정', author: '운영팀', date: '2024-04-10' }
]);
const resources = ref([   // 자료실 데이터
  { id: 1, filename: '프로젝트 계획서.pdf', author: '기획팀', date: '2024-03-25' },
  { id: 2, filename: '디자인 가이드.docx', author: '디자인팀', date: '2024-03-30' },
  { id: 3, filename: '테스트 케이스.xlsx', author: 'QA팀', date: '2024-04-02' }
]);
const tabClass = (tab) => {  // 탭 클래스 함수
  return activeTab.value === tab ? 'border-b-2 border-blue-500' : '';
};
</script>
<style scoped>
.border-b-2 {
  border-bottom-width: 2px;
}
</style>    