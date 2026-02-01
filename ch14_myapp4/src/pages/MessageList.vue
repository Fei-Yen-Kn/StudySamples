<template>
    <div class="grid-container">
      <h1 class="text-center">메시지 목록</h1><hr/>
      <div class="grid-x grid-padding-x">
        <div class="cell small-12 medium-6 large-4">
          <router-link to="/messages/send" class="button expanded">보낸 메시지 ({{ sentCount }})</router-link>
        </div>
        <div class="cell small-12 medium-6 large-4">
          <router-link to="/messages/receive" class="button expanded">받은 메시지 ({{ receivedCount }})</router-link>
        </div>
        <div class="cell small-12 medium-6 large-4">
          <router-link to="/messages/new" class="button success expanded">메시지 보내기</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useMessageStore } from '@/store/messageStore';
  import { computed, onMounted } from 'vue';
  import { useAuthStore } from '@/store/authStore';
  const messageStore = useMessageStore();
  const sentCount = computed(() => messageStore.sentMessages.length);
  const receivedCount = computed(() => messageStore.receivedMessages.length);
  const authStore = useAuthStore();
  onMounted(() => {
    const user = authStore.user;
    messageStore.fetchSentMessages(user.id);
    messageStore.fetchReceivedMessages(user.id);
  });
  </script>
  
  <style scoped>
  .text-center {
    text-align: center;
  }
  </style>