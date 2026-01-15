<template>
  <div v-show="isVisible" class="red"></div>
  <div v-show="!isVisible" class="blue">디스플레이 css만 바꿈</div>
  <div v-if="isVisible" class="green">렌더링이 안됨</div>
  <div style="color: red">
    <li>{{ sampleArray[0] }}</li>
    <li>{{ sampleArray[1] }}</li>
    <li>{{ sampleArray[2] }}</li>
  </div>
  <div>
    <li v-for="sample in sampleArray">{{ sample }}</li>
    <li
      v-for="(user, idx) in otherArray"
      :key="user.id"
      @click="showName(user.name)"
    >
      id:{{ user.id }} / name:{{ user.name }} / idx:{{ idx }}
    </li>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
      sampleArray: ["a", "b", "c", "d", "e"],
      otherArray: [
        { id: 1, name: "John" },
        { id: 1, name: "Kim" },
        { id: 3, name: "Jane" },
        { id: 4, name: "Michle" },
        { id: 5, name: "Kevin" },
      ],
    };
  },
  methods: {
    showName(name) {
      alert(name);
    },
  },
};
</script>

<style scoped>
.red {
  width: 100px;
  height: 100px;
  background-color: red;
}
.blue {
  width: 100px;
  height: 100px;
  background-color: blue;
}
.green {
  width: 100px;
  height: 100px;
  background-color: green;
}
</style>
