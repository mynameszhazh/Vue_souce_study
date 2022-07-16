<template>
  <div>我是 home 的一个 子组件: {{name}}</div>
</template>

<script>
export default {
  name: "chilren",
  props: {
    name: {
      type: String,
      required: true,
      validator: (value) => {
        // 这个值必须匹配下列字符串中的一个
        return ["success", "text", "danger"].indexOf(value) !== -1;
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
