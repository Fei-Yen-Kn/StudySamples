<template>
  <div style="background-color: red">
    <button @click="sendEvent">자식컴포넌트 버튼</button>
  </div>
</template>

<!-- Composition
<script setup lang="ts">
import { ref } from "vue";

const data = ref<string>("자식컴포넌트에서 생성된 데이터");
const emit = defineEmits(["send-event"]);
const sendEvent = () => {
  emit("send-event", data.value);
};
</script> -->

<script>
export default {
  data() {
    return {
      text: "자식컴포넌트에서 생성된 데이터",
    };
  },
  methods: {
    sendEvent() {
      this.$emit("send-event", this.text);
    },
  },
};
</script>

<style lang="scss" scoped></style>
