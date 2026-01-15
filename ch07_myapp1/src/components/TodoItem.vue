<template>
  <li class="flex justify-between items-center p-2 border-b">
    <span>{{ todo.text }}</span>
    <button @click="remove" class="text-red-500">삭제</button>
  </li>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue';
const props = defineProps({
  todo: {
    type: Object,
    required: true,
  },
});
const emit = defineEmits(['remove']);
const remove = () => {
  emit('remove', props.todo.id);
};
</script>  