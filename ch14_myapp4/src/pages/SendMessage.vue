<template>
    <div class="grid-container">
      <h1 class="text-center">보낸 메시지함</h1><hr/>
      <ul class="vertical menu">
        <li v-for="message in sentMessages" :key="message.id">
          <div class="callout">
            <p><strong>To:</strong> {{ message.receiverUsername }}</p>
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
  const sentMessages = computed(() => messageStore.sentMessages);
  const authStore = useAuthStore();
  const userStore = useUserStore();
  onMounted(() => {
    const user = authStore.user;
    console.log(user.id);
    messageStore.fetchSentMessages(user.id);
  });
  </script>
  
  <style scoped>
  .text-center {
    text-align: center;
  }
  </style>