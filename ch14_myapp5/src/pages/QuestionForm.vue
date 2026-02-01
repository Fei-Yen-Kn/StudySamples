<template>
    <DefaultLayout>
      <h1 class="center">{{ isEdit ? 'Edit Question' : 'New Question' }}</h1>
      <form @submit.prevent="handleSubmit">
        <div class="input-field">
          <input v-model="formData.title" type="text" id="title" required />
          <label for="title" class="active">Question Title</label>
        </div>
        <div class="input-field">
          <textarea v-model="formData.description" id="description" class="materialize-textarea" required></textarea>
          <label for="description" class="active">Description</label>
        </div>
        <div class="input-field">
          <input v-model="formData.courseId" type="text" id="courseId" required />
          <label for="courseId" class="active">Course ID</label>
        </div>
        <button class="btn waves-effect waves-light" type="submit">{{ isEdit ? 'Update' : 'Create' }}</button>
      </form>
    </DefaultLayout>
  </template>
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  import questionService from '@/services/questionService';
  const router = useRouter();
  const route = useRoute();
  const isEdit = ref(!!route.params.id);
  const formData = ref({ title: '', description: '', courseId: '' });
  onMounted(async () => {
    if (isEdit.value) {
      const question = await questionService.getQuestionById(route.params.id);
      formData.value = {
        title: question.title,
        description: question.description,
        courseId: question.courseId,
      };
    }
  });
  async function handleSubmit() {
    if (isEdit.value) {
      await questionService.updateQuestion(route.params.id, formData.value);
      alert('Question updated successfully!');
    } else {
      await questionService.createQuestion(formData.value);
      alert('Question created successfully!');
    }
    router.push('/questions');
  }
  </script>
  <style scoped>
  form {
    max-width: 600px;
    margin: 0 auto;
  }
  </style>  