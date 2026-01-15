<template>
  <div>
    <ChildComponent
      :sendProps1="title"
      :sendProps2="createAt"
      :send-props3="author"
    ></ChildComponent>
  </div>
</template>

<!-- options
<script>
import ChildComponent from "./components/ChildComponent.vue";

export default {
  data() {
    return {
      title: "부모컴포넌트에서 선언된 데이터",
      createAt: 2025,
      obj: { id: 2025, name: "John" },
    };
  },
  components: { ChildComponent },
};
</script> -->

<script setup lang="ts">
import { reactive, ref } from "vue";
import ChildComponent from "./definePropsChild.vue";

interface Author {
  id: number;
  name: string;
}

const title = ref<string>("Composition 선언된 데이터");
const createAt = ref<number>(2025);
const author = reactive<Author>({ id: 1970, name: "John" });
</script>

<style lang="scss" scoped></style>
