<template>
  <div>{{ rawHtml }}</div>
  <div>{{ rawHtml2 }}</div>
  <h1 v-html="rawHtml2"></h1>
  <h2 :class="{ active: isActive }">클래스 바인딩 테스트</h2>
  <button @click="isActive = !isActive">버튼</button>
  <button @click="change">버튼2</button>

  <h3 :style="{ color: BianchiGreen, fontSize: fontSize + 'px' }">
    스타일 바인딩 테스트
  </h3>
</template>

<script>
export default {
  data() {
    return {
      rawHtml: "이것은 텍스트입니다.",
      rawHtml2: "<span style='color:red'>이것은 빨간색이어야 합니다.</span>",
      isActive: false,
      BianchiGreen: "#3dcfc2",
      fontSize: 48,
    };
  },
  methods: {
    change() {
      console.log("change");
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped>
h2.active {
  color: green;
}
</style>
