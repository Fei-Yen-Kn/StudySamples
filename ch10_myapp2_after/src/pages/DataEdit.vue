<template>
   <div class="content">
     <h2 class="title">글 수정</h2>
     <form @submit.prevent="submitEdit">
       <div class="field">
         <label class="label">제목</label>
         <div class="control">
           <input class="input" type="text" v-model="editableData.title" required />
         </div>
       </div>
       <div class="field">
         <label class="label">글 내용</label>
         <div class="control">
           <textarea class="textarea" v-model="editableData.content" required></textarea>
         </div>
       </div>
       <div class="field">
         <label class="label">작성자</label>
         <div class="control">
           <input class="input" type="text" v-model="editableData.author" required />
         </div>
       </div>
       <div class="field">
         <label class="label">자료파일</label>
         <div class="control">
           <input class="input" type="file" @change="handleFileChange" accept=".pdf,.doc,.docx,image/*" />
           <p class="help">현재 파일: <a :href="editableData.datafile" target="_blank">{{ editableData.datafileName }}</a></p>
         </div>
       </div>
       <div class="field is-grouped">
         <div class="control">
           <button type="submit" class="button is-link">[글 수정]</button>
         </div>
         <div class="control">
           <button type="button" class="button" @click="goToList">취소</button>
         </div>
       </div>
     </form>
   </div>
 </template>
 <script setup>
 import { ref, onMounted } from 'vue';
 import { useProductStore } from '../store/productStore';
 import { useRouter, useRoute } from 'vue-router';
 const productStore = useProductStore();
 const router = useRouter();
 const route = useRoute();
 const dno = route.params.dno;
 //const data = computed(() => productStore.currentData);
 const editableData = ref({
  dno: '', title: '', content: '', author: '', datafile: '', datafileName: '',
  resdate: '', hits: 0, newDatafile: null,
 });
 const fetchDataDetail = async () => {
   await productStore.fetchDataDetail(dno);
   const current = productStore.currentData;
   editableData.value = {
     dno: current.dno, title: current.title, content: current.content,
     author: current.author, datafile: current.datafile, datafileName: current.datafileName,
     resdate: current.resdate, hits: current.hits, newDatafile: null,
   };
 };
 const handleFileChange = (event) => {
   const file = event.target.files[0];
   if (file) {
     editableData.value.newDatafile = file;
   }
 };
 const submitEdit = async () => {
   const formData = new FormData();
   formData.append('title', editableData.value.title);
   formData.append('content', editableData.value.content);
   formData.append('author', editableData.value.author);
   if (editableData.value.newDatafile) {
     formData.append('datafile', editableData.value.newDatafile);
   }
   await productStore.updateData(dno, formData);
   router.push({ name: 'DataList' });
 };
 const goToList = () => {
   router.push({ name: 'DataList' });
 };
 onMounted(() => {
   fetchDataDetail();
 });
 </script>    