<template>
  <div class="children">
    <div>我是 home 的一个 子组件: {{ name }} - {{ $log(logMsg) }}</div>
    <button @click="changeFoo">chang foo</button>
    <SubChildren></SubChildren>
  </div>
</template>

<script>
import SubChildren from "./SubChildren.vue";
export default {
  name: "chilren",
  inject: ["foo"],
  data() {
    return {
      logMsg: '我就是一个打印信息' 
    }
  },
  props: {
    name: {
      type: String,
      required: true,
      validator: (value) => {
        // 这个值必须匹配下列字符串中的一个
        return ["success", "text", "danger"].indexOf(value) !== -1;
      },
    },
    title: {
      type: String,
      required: true,
    },
  },
  mounted() {
    // console.log(this.$attrs);
    // console.log(this.$listeners);
    // this.$listeners.change();
    console.log(this.title);
    this.$emit("update:title", "这是新的title");
  },
  methods: {
    changeFoo() {
      this.foo = "foo2";
    },
  },
  components: { SubChildren },
};
</script>

<style lang="scss" scoped></style>
