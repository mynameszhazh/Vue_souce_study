<template>
  <div>
    <div>i am sub chilrend{{ this.foo }}</div>
    <div>
      <h3>{{count}}</h3>
      <button @click="setCount(3)">setCount</button>
    </div>
  </div>
</template>

<script>
import { store, mutations } from "../store/observable";
export default {
  inject: ["foo", "fooMethod"], //数组或者对象,注入到子组件
  mounted() {
    this.fooMethod();
    console.log(this.foo);
  },
  computed: {
    count() {
      return store.count;
    },
  },
  methods: {
    setCount: mutations.setCount,
  },
};
</script>

<style lang="scss" scoped></style>
