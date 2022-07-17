<template>
  <div>
    <div>{{ home }}</div>
    <Children
      name="text"
      :title.sync="title"
      alt="alt"
      @change="change"
    ></Children>
  </div>
</template>

<script>
import Children from "./Children.vue";
export default {
  name: "Home",
  provide() {
    return {
      //provide 是一个对象,提供一个属性或方法
      foo: this.fooMsg,
      fooMethod: () => {
        console.log("父组件 fooMethod 被调用");
      },
    };
  },
  data() {
    return {
      home: "我就是一个home2",
      fooMsg: "这是 foo",
      title: '我是标题'
    };
  },
  watch: {
    title(newValue, oldValue) {
      console.log(newValue, oldValue)
    }
  },
  created() {
    setTimeout(() => {
      this.fooMsg = "我就是一个foo";
      console.log('我就是一个foo')
    }, 2000);
  },
  methods: {
    change() {
      console.log("我发生了一些改变！！");
    },
  },
  components: {
    Children,
  },
};
</script>

<style lang="scss" scoped></style>
