<template>
  <div>{{ count }}</div>
  <h1>LifCycle is beautiful</h1>
</template>

<script>
export default {
  setup() {
    return {};
  },
  data() {
    return {
      count: 0,
    };
  },
  beforeCreate() {
    console.log("LifeCycle is beforeCreate : ", this.count);
    if (this.test) this.test();
  },
  created() {
    console.log("LifeCycle is created : ", this.count);
    this.test();
  },
  beforeMount() {
    console.log("LifeCycle is beforeMount : ", document.querySelector("h1"));
  },
  mounted() {
    console.log("LifeCycle is mounted : ", document.querySelector("h1"));
  },
  methods: {
    test() {
      console.log("test Call");
    },
  },
};
</script>

<style lang="scss" scoped></style>
