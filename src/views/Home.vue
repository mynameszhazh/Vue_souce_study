<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p>{{ currentDate }}</p>
    <div class="form">
      <input type="text" @keydown.enter="addFeature" />
      <!-- <button @click='addFeature'>添加</button> -->
    </div>
    <div class="list">
      <ul>
        <li v-for="item in features" :key="item.id">{{ item.name }}</li>
      </ul>
    </div>
    <el-form ref="loginForm">
      <el-button @click="onSubmit">{{ username }}</el-button>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Ref, Mixins } from "vue-property-decorator";
import { getHomeUserList } from "@/api/home/userList";
import { Feature } from "@/type/index";
import { Form } from "element-ui";
import moment from "moment";
// import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

// 验证vuex的ts使用
import { namespace, Action, Mutation, State } from "vuex-class";
import MyMixin from '@/minxin/test-mixin';
// 这里使用的就是我模块的 user模块的内容了
const userModule = namespace("user");

@Component({
  components: {
    // HelloWorld
  }
})
export default class Home extends Mixins(MyMixin) {
  // 这个地方必须有一个初始值这样才能进行一个处理?
  public features: Feature[] = [];
  public golbalFeatures: Feature[] = [];
  public currentDate = moment().format("YYYY/MM/DD");

  // 关于element组件的其中一个基本用法,这个适合dom元素有点联系的
  @Ref() loginForm!: Form;

  @userModule.State("name")
  username!: string;

  addFeature(e: KeyboardEvent) {
    // 这个e的target 处理起来 他是一个 event
    const inp = e.target as HTMLInputElement;
    this.features.push({ id: this.features.length + 1, name: inp.value });
    inp.value = "";
  }

  onSubmit() {
    console.log(this.username);
    // this.loginForm.validate(isValid => {
    //   // console.log(isValid);
    // })
  }
  created() {
    getHomeUserList().then(res => {
      this.features = res.data;
    });
  }
  mounted() {}
}
</script>
