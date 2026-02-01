<template>
    <DefaultLayout>
      <div class="container">
        <h2 class="center">프로필</h2><hr/>
        <div v-if="user">
          <p><strong>Username:</strong> {{ user.username }}</p>
          <p><strong>Email:</strong> {{ user.email }}</p>
          <p><strong>Name:</strong> {{ user.name }}</p>
          <hr/>
        </div>
        <div v-else>
          <p>Loading profile...</p>
        </div>
      </div>
    </DefaultLayout>
</template>
<script setup>
import { onMounted, ref, computed } from 'vue';
import { useAuthStore, useUserStore } from '@/store';
import { useRouter } from 'vue-router';
const authStore = useAuthStore();
const userStore = useUserStore();
const router = useRouter();
const user = computed(() => userStore.user);
onMounted(async () => {
  const username = localStorage.getItem("username");
  await userStore.getUser(username);
  console.log(user.value);
});
</script>
<style scoped>
p {
    font-size: 18px;
}
</style>