<template>
  <div class="user-profile">
    <h2>사용자 프로필</h2><hr/>
    <form @submit.prevent="updateProfile" class="grid-container">
      <div class="grid-x grid-padding-x">
        <div class="cell small-12 medium-12">
          <label for="username">Username</label>
          <input
            type="text"
            v-model="username"
            id="username"
            class="input-group-field"
            required readonly
          />
        </div>
        <div class="cell small-12 medium-12">
          <label for="email">Email</label>
          <input
            type="email"
            v-model="email"
            id="email"
            class="input-group-field"
            required
          />
        </div>
        <div class="cell small-12 medium-12">
          <label for="nickname">Name</label>
          <input
            type="text"
            v-model="nickname"
            id="nickname"
            class="input-group-field"
            required
          />
        </div>
        <div class="cell small-12">
          <button type="submit" class="button primary">프로필 변경</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script setup>
import { ref, onMounted, computed} from 'vue';
import { useUserStore } from '@/store/userStore';  // userStore 가져오기
import { useAuthStore } from '@/store/authStore';  // authStore 가져오기
const username = ref('');
const email = ref('');
const nickname = ref('');
const userStore = useUserStore();
const authStore = useAuthStore();
const user = computed(() => userStore.user);
onMounted(async () => {
  const uname = localStorage.getItem("username");
  await userStore.fetchUser(uname);
  username.value = user.value?.username;
  email.value = user.value?.email;
  nickname.value = user.value?.name;
});
const updateProfile = async () => {
  try {
    const userId = authStore.userId; // 로그인된 사용자 ID
    const updatedUserData = { username: username.value, email: email.value };
    await userStore.updateProfile(userId, updatedUserData);
    alert('Profile updated successfully');
  } catch (error) {
    console.error('Profile update failed:', error);
    alert('Failed to update profile');
  }
};
</script>
<style scoped>
.user-profile {
  padding: 20px;
}
</style>