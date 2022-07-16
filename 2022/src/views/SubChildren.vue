<template>
  <div>i am sub chilrend{{this.foo}}</div>
</template>

<script>
export default {
  inject: ["foo", "fooMethod"], //数组或者对象,注入到子组件
  mounted() {
    this.fooMethod();
    console.log(this.foo);
  },
};
</script>

<style lang="scss" scoped></style>
