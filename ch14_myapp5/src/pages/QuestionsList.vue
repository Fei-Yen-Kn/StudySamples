<template>
    <DefaultLayout>
      <h1 class="center">Questions</h1>
      <ul class="collection">
        <li v-for="question in questions" :key="question.id" class="collection-item">
          <router-link :to="`/questions/${question.id}`">{{ question.title }}</router-link>
        </li>
      </ul>
      <router-link to="/questions/new" class="btn waves-effect waves-light">New Question</router-link>
    </DefaultLayout>
  </template>
  <script setup>
  import { ref, onMounted } from 'vue';
  import questionService from '@/services/questionService';
  const questions = ref([]);
  onMounted(async () => {
    questions.value = await questionService.getAllQuestions();
  });
  </script>
  <style scoped>
  ul {
    margin-top: 20px;
  }
  </style>