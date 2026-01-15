<template>
  <!--  <div>sendProps1: {{ sendProps1 }}</div>
  <div>sendProps2: {{ sendProps2 }}</div>
  <div>sendProps3- id:{{ sendProps3.id }} / name:{{ sendProps3.name }}</div> -->
  <div>sendProps1: {{ props.sendProps1 }}</div>
  <div>sendProps2: {{ props.sendProps2 }}</div>
  <div>
    sendProps3- id:{{ props.sendProps3.id }} / name:{{ props.sendProps3.name }}
  </div>

  <div>sendProps1: {{ sendProps1 }}</div>
  <div>sendProps2: {{ sendProps2 }}</div>
  <div>sendProps3- id:{{ sendProps3.id }} / name:{{ sendProps3.name }}</div>
</template>

<!-- Options
<script>
export default {
  data() {
    return {};
  },
  props: { sendProps1: String, sendProps2: Number, sendProps3: Object },
};
</script> -->

<script setup lang="ts">
import { DefineProps, toRefs } from "vue";

interface Author {
  id: number;
  name: string;
}

interface Props {
  sendProps1: String;
  sendProps2: Number;
  sendProps3: Author;
}

const props = defineProps<Props>();
const { sendProps1, sendProps2, sendProps3 } = toRefs(props); //구조분해 사용간편
</script>

<style lang="scss" scoped></style>
