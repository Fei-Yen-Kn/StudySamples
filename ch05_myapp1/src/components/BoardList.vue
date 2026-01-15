<template>
  <div class="board-container">
    <h2>Board List</h2>
    <div v-for="(post, index) in posts" :key="index" :class="{ highlighted: selectedIndex === index }" @click="selectPost(index)" class="post">
      {{ post.title }}
    </div>
    <p :style="descriptionStyle">{{ selectedPostDescription }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      posts: [
        { title: "Vue.js 소개", description: "Vue.js는 프론트엔드 프레임워크입니다." },
        { title: "컴포넌트 기반 개발", description: "컴포넌트를 이용한 재사용성이 높은 개발 방식입니다." },
        { title: "Vue의 상태 관리", description: "Vuex를 이용한 상태 관리에 대해 알아봅니다." }
      ],
      selectedIndex: null
    };
  },
  computed: {
    selectedPostDescription() {
      return this.selectedIndex !== null ? this.posts[this.selectedIndex].description : "게시물을 선택해주세요.";
    },
    descriptionStyle() {
      return {
        color: this.selectedIndex !== null ? 'blue' : 'gray',
        fontSize: '16px',
        padding: '10px'
      };
    }
  },
  methods: {
    selectPost(index) {
      this.selectedIndex = index;
    }
  }
};
</script>
<style scoped>
.board-container {
  border: 1px solid #ddd;
  padding: 20px;
  max-width: 500px;
  margin: 0 auto;
  border-radius: 10px;
  background-color: #f9f9f9;
}
h2 {
  text-align: center;
  color: #333;
}
.post {
  padding: 10px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.post:hover {
  background-color: #f1f1f1;
}
.highlighted {
  background-color: #d3f9d8;
  font-weight: bold;
}
p {
  margin-top: 20px;
  font-size: 14px;
}
</style>