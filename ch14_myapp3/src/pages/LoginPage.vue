<template>
  <div class="fr-content" style="">
    <h3 class="title">로그인</h3><hr/>
    <form @submit.prevent="login" class="pure-form pure-form-stacked">
      <fieldset>
        <label for="username">UserID</label>
        <input id="username" v-model="form.username" placeholder="Enter UserID" required />
        
        <label for="password">Password</label>
        <input id="password" v-model="form.password" type="password" placeholder="Enter password" required />
        
        <button type="submit" class="pure-button pure-button-primary">로그인</button> 
        
        <!-- 회원가입 버튼 추가 -->
        <router-link to="/register">
          <button type="button" class="pure-button pure-button-secondary">회원가입</button>
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
  password: ''
});
const authStore = useAuthStore();
const router = useRouter();
const login = async () => {
  try {
    await authStore.login(form.value.username, form.value.password);
    router.push('/');
  } catch (error) {
    console.error(error);
  }
};
</script>

<style scoped>
fieldset * {
  margin-top: 12px;
}

button[type="button"] {
  margin-left: 10px;
}
</style>