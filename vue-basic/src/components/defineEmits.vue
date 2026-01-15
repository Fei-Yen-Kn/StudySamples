<template>
  <div>
    부모컴포넌트 레이아웃
    <ChildComponent @send-event="parentEvent"></ChildComponent>
  </div>
</template>

<!-- <script setup lang="ts">
import { reactive, ref } from "vue";
import ChildComponent from "./components/definePropsEmits.vue";

const parentEvent = (event: string) => {
  console.log("parentEvent:" + event);
};
</script> -->

<script>
import ChildComponent from "../components/defineEmitsChild.vue";

export default {
  components: { ChildComponent },
  methods: {
    parentEvent(event) {
      console.log("parentEvent:" + event);
    },
  },
};
</script>

<style lang="scss" scoped></style>
