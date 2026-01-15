<template>
  <div>
    <button @click="count++">인라인 핸들러</button>
    <h1>{{ count }}</h1>

    <button @click="changeName">메서드 핸들러</button>
    <h1>{{ name }}</h1>

    <h1>{{ text }}</h1>
    <h1>changeText 함수 호출 값: {{ changeText() }}</h1>
    <h1>changeText 함수 호출 값: {{ changeText() }}</h1>
    <h1>changeText 함수 호출 값: {{ changeText() }}</h1>

    <h2>{{ computedText }}</h2>
    <h2>{{ computedText }}</h2>
    <h2>{{ computedText }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return { count: 0, name: "Vue.js", text: "Computed 테스트" };
  },
  methods: {
    changeName() {
      this.name = "변경된 텍스트 데이터";
    },
    changeText() {
      console.log("changeText:" + this.text);
      return this.text.split("").reverse().join("");
    },
  },
  //캐싱됨
  computed: {
    computedText() {
      console.log("computedText:" + this.text);
      return this.text.split("").reverse().join("");
    },
  },
};
</script>

<style lang="scss" scoped></style>
