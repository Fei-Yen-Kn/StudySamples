<template>
  <div id="app">
    <h1>Vue Board Project</h1>
    <Board />
  </div>
</template>
<script>
import Board from './components/BoardList.vue';
export default {
  name: 'App',
  components: {
    Board
  }
};
</script>
<style>
h1 {
  color: #42b983;
  text-align: center;
}
</style>