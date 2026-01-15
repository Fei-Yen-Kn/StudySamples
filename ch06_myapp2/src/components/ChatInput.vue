<template>
  <div class="field has-addons">
    <input
      class="input"
      v-model="inputValue"
      @keyup.enter="submitMessage"
      placeholder="Type a message"
    />
  </div>
  <div class="control">
    <button class="button is-info" @click="submitMessage">Send</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const inputValue = ref("");
const emit = defineEmits(["send-message"]);
const submitMessage = () => {
  if (inputValue.value.trim()) {
    emit("send-message", inputValue.value);
    inputValue.value = "";
  }
};
</script>
