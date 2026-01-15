<template>
  <div class="message is-primary mb-2">
    <div class="message-header">
      <p>{{ props.message.timestamp }}</p>
    </div>
    <div class="message-body">{{ props.message.text }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  message: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.message {
  word-wrap: break-word;
}
</style>
