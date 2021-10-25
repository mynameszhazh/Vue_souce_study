<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="form">
      <input type="text" @keydown.enter="addFeature">
      <!-- <button @click='addFeature'>添加</button> -->
    </div>
    <div class="list">
      <ul>
        <li v-for="item in features" :key="item">{{item}}</li>
      </ul>
    </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Component({
  components: {
    // HelloWorld
  }
})
export default class Home extends Vue {
  // 这个地方必须有一个初始值这样才能进行一个处理?
  features: string[] = []
  addFeature (e: KeyboardEvent) {
    // 这个e的target 处理起来 他是一个 event
    const inp = (e.target as HTMLInputElement)
    this.features.push(inp.value)
    inp.value = ''
  }
  created () {
    this.features = ['类型注解', '使用vue处理']
  }
}
</script>
