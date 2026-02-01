<template>
    <form @submit.prevent="submit" class="pure-form pure-form-stacked">
      <fieldset>
        <label for="title">Title</label>
        <input id="title" v-model="form.title" placeholder="Enter title" required />
        <label for="description">Description</label>
        <input id="description" v-model="form.description" placeholder="Enter description" />
        <label for="content">Content</label>
        <textarea id="content" v-model="form.content" placeholder="Enter content" required></textarea>
        <button type="submit" class="pure-button pure-button-primary">Submit</button>
      </fieldset>
    </form>
  </template>
  <script setup>
  import { useContentStore } from '../store/useContentStore';
  import { ref, watch } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  const route = useRoute();
  const router = useRouter();
  const contentStore = useContentStore();
  const form = ref({
    title: '',
    description: '',
    content: ''
  });
  if (route.params.id) {
    const selectedContent = contentStore.selectedContent;
    watch(() => selectedContent, () => {
      form.value = { ...selectedContent };
    });
  }
  const submit = async () => {
    if (route.params.id) {
      await contentStore.updateContent(route.params.id, form.value);
    } else {
      await contentStore.addContent(form.value);
    }
    router.push('/contents');
  };
  </script>  