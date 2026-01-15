<template>
  <li class="pure-menu-item">
    <span>{{ todo.text }}</span>
    <button @click="remove" class="pure-button pure-button-error">
      Remove
    </button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  emits: ["remove"],
  setup(props, { emit }) {
    const remove = () => {
      emit("remove");
    };

    return {
      remove,
    };
  },
};
</script>

<style scoped>
.pure-menu-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
</style>
