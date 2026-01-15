<template>
  <div class="grid-container">
    <h2>상품 등록</h2>
    <form @submit.prevent="submitForm">
      <div class="grid-x grid-padding-x">
        <div class="medium-12 cell">
          <label>상품명
            <input type="text" v-model="product.pname" required />
          </label>
        </div>
        <div class="medium-12 cell">
          <label>상품내용
            <textarea v-model="product.pcontent" required></textarea>
          </label>
        </div>
        <div class="medium-12 cell">
          <label>카테고리
            <select v-model="product.cate" required>
              <option value="base" selected>본 품</option>
              <option value="acc">액세사리</option>
              <option value="gift">선물</option>
            </select>
          </label>
        </div>
        <div class="medium-4 cell">
          <label class="button">상품이미지1
            <input type="file" @change="(event) => handleFileChange(1, event)" accept="image/*" class="show-for-sr"/>
          </label>
        </div>
        <div class="medium-4 cell">
          <label class="button">상품이미지2
            <input type="file" @change="(event) => handleFileChange(2, event)" accept="image/*" class="show-for-sr"/>
          </label>
        </div>
        <div class="medium-4 cell">
          <label class="button">상품이미지3
            <input type="file" @change="(event) => handleFileChange(3, event)" accept="image/*" class="show-for-sr"/>
          </label>
        </div>
      </div> 
      <button type="submit" class="button">[상품 등록]</button>
    </form>
  </div> 
</template>
<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
const store = useStore();
const router = useRouter();
const product = ref({
  cate: 'base', pname: '', pcontent: '', img1: null, img2: null, img3: null,
});
const handleFileChange = (index, event) => {
  const file = event.target.files[0];
  if (file) {
    product.value[`img${index}`] = file;
  }
};
const submitForm = async () => {
  const formData = new FormData();
  formData.append('cate', product.value.cate);
  formData.append('pname', product.value.pname);
  formData.append('pcontent', product.value.pcontent);
  if (product.value.img1) formData.append('img1', product.value.img1);
  if (product.value.img2) formData.append('img2', product.value.img2);
  if (product.value.img3) formData.append('img3', product.value.img3);
  await store.dispatch('insertProduct', formData);
  router.push({ name: 'ProductList' });
};
</script>
<style scoped>
form {
  margin-top: 1rem;
}
</style>    