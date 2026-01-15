<template>
  <div>
    <input type="text" v-model="inputValue1" />
  </div>
  <div>{{ inputValue1 }}</div>
  <div>
    <input
      type="text"
      :value="inputValue2"
      @input="inputValue2 = $event.target.value"
    />
  </div>
  <div>{{ inputValue2 }}</div>
</template>

<script>
export default {
  data() {
    return { inputValue1: "", inputValue2: "" };
  },
};
</script>

<style lang="scss" scoped></style>
