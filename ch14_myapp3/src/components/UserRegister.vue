<template>
  <div class="fr-content">
    <hr/>
    <form @submit.prevent="submit" class="pure-form pure-form-stacked">
      <fieldset>
        <label for="username">UserID</label>
        <input id="username" v-model="form.username" placeholder="Enter UserID" required />
        <label for="email">Email</label>
        <input id="email" v-model="form.email" type="email" placeholder="Enter email" required />
        <label for="password">Password</label>
        <input id="password" v-model="form.password" type="password" placeholder="Enter password" required />
        <button type="submit" class="pure-button pure-button-primary">회원가입</button> &nbsp; 
        <!-- 로그인 버튼 추가 -->
        <router-link to="/login">
          <button type="button" class="pure-button pure-button-secondary">로그인</button>
        </router-link>
      </fieldset>
    </form>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../store/useAuthStore';
import { useRouter } from 'vue-router';
const form = ref({
  username: '',
  email: '',
  password: ''
});
const authStore = useAuthStore();
const router = useRouter();
const submit = async () => {
  try {
    await authStore.register(form.value);
    router.push('/login');
  } catch (error) {
    console.error(error);
  }
};
</script>
  