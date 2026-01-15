<template>
  <div class="app pure-g">
    <div class="pure-u-1-3">
      <TodoList />
    </div>
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";

export default {
  components: {
    TodoList,
  },
};
</script>

<style>
.app {
  padding: 20px;
  font-family: Arial, sans-serif;
  width: 320px;
  margin: 0 auto;
}
.pure-u-1-3 {
  width: 300px;
}
.pure-menu-item span {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
