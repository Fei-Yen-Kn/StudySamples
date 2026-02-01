<template>
    <div class="grid-container">
      <h1 class="text-center">받은 메시지함</h1><hr/>
      <ul class="vertical menu">
        <li v-for="message in receivedMessages" :key="message.id">
          <div class="callout">
            <p><strong>From:</strong> {{ message.senderUsername }}</p>
            <p>{{ message.content }}</p>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { useMessageStore } from '@/store/messageStore';
  import { computed, onMounted } from 'vue';
  import { useAuthStore } from '@/store/authStore';
  import { useUserStore } from '@/store/userStore';
  const messageStore = useMessageStore();
  const receivedMessages = computed(() => messageStore.receivedMessages);
  const authStore = useAuthStore();
  const userStore = useUserStore();
  onMounted(() => {
    const user = authStore.user;
    messageStore.fetchReceivedMessages(user.id);
  });
  </script>
  
  <style scoped>
  .text-center {
    text-align: center;
  }
  </style>