<template>
    <div class="grid-container">
      <h1 class="text-center">쪽지 보내기</h1><hr/>
      <form @submit.prevent="handleSubmit">
        <div class="grid-x grid-padding-x">
          <div class="cell small-12">
            <label>받는 사람
                <select v-model="receiverId" required>
                    <option v-for="user in users" :key="user.id" :value="user.id">{{ user.username }}</option>
                </select>
            </label>
          </div>
          <div class="cell small-12">
            <label>메시지
              <textarea v-model="content" placeholder="Write your message..." rows="5" required></textarea>
            </label>
          </div>
          <div class="cell small-12">
            <button type="submit" class="button success expanded">쪽지 보내기</button>
          </div>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { useMessageStore } from '@/store/messageStore';
  import { ref, computed, onMounted } from 'vue';
  import { useAuthStore } from '@/store/authStore';
  import { useUserStore } from '@/store/userStore';
  const messageStore = useMessageStore();
  const receiverId = ref('');
  const content = ref('');
  const authStore = useAuthStore();
  const userStore = useUserStore();
  const users = computed(() => userStore.users);
  const handleSubmit = () => {
    const u = authStore.user;
    const senderId = u.id;
    messageStore.sendMessage(senderId, receiverId.value, content.value);
  };
  onMounted(() => {
    userStore.fetchUsers();
  });
  </script>
  
  <style scoped>
  .text-center {
    text-align: center;
  }
  </style>