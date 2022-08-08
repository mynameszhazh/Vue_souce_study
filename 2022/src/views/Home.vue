<template>
  <div>
    <!--  预习视频 -->
    <template>
      <div>{{ home }}-observable data{{ count }}</div>
      <button @click="changeComponet">loginCom</button>
      <button @click="changeComponet(1)">chilrenCom</button>
      <Children
        name="text"
        :title.sync="title"
        alt="alt"
        @change="change($event, title)"
      ></Children>
      <transition name="slide-fade">
        <keep-alive>
          <component
            :is="currentComponent"
            name="text"
            title="titel"
          ></component>
        </keep-alive>
      </transition>
      <router-view></router-view>
    </template>
  </div>
</template>

<script>
import Children from "./Children.vue";
import Login from "./Login.vue";
import { store } from "../store/observable";
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
      detailInfo: {},
      currentComponent: null,
      fooMsg: "这是 foo",
      title: "我是标题",
    };
  },
  computed: {
    count() {
      return store.count;
    },
  },
  mounted() {},
  watch: {
    title(newValue, oldValue) {
      console.log(newValue, oldValue);
    },
  },
  created() {
    setTimeout(() => {
      this.fooMsg = "我就是一个foo";
      console.log("我就是一个foo");
    }, 2000);
  },
  methods: {
    change(item, val) {
      console.log(item, val);
      // console.log("我发生了一些改变！！");
    },
    changeComponet(index) {
      if (index == 1) {
        this.currentComponent = Children;
      } else {
        this.currentComponent = Login;
      }
    },
  },
  components: {
    Children,
    Login,
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
