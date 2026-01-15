<template>
  <div class="box">
    <div class="chat-messages" style="max-height: 400px; overflow-y: auto">
      <ChatMessage
        v-for="(message, index) in messages"
        :key="index"
        :message="message"
      ></ChatMessage>
    </div>
    <ChatInput @send-message="addMessage"></ChatInput>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ChatMessage from "./ChatMessage.vue";
import ChatInput from "./ChatInput.vue";

const messages = ref([]);
const addMessage = (msg) => {
  console.log("addMessage: ", msg);
  messages.value.push({
    text: msg,
    timestamp: new Date().toLocaleTimeString(),
    toLocaleTimeString: new Date().toLocaleTimeString(),
  });
};
</script>

<style scoped>
.chat-messages {
  margin-bottom: 20px;
}
</style>
