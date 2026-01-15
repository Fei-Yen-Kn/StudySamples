<template>
  <button @click="changeMessage">{{ message }}</button>
  <h4>{{ watchMessage }}</h4>
</template>

<script>
export default {
  data() {
    return { message: "Vue.js Watch 기능 테스트 오리지널", watchMessage: "" };
  },
  methods: {
    changeMessage() {
      console.log("changeMessage Call..");
      this.message = "변경된 Message";
    },
  },
  watch: {
    message() {
      console.log("Watch Messge..");
      this.watchMessage = "Watch 감지!";
    },
  },
};
</script>

<style lang="scss" scoped></style>
