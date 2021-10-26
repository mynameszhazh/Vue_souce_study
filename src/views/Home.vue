<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="form">
      <input type="text" @keydown.enter="addFeature">
      <!-- <button @click='addFeature'>添加</button> -->
    </div>
    <div class="list">
      <ul>
        <li v-for="item in features" :key="item.id">{{item.name}}</li>
      </ul>
    </div>
    <div class="list2">
      <ul>
        <li v-for="item in golbalFeatures" :key="item.id">{{item.name}}</li>
      </ul>
    </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import {getHomeUserList} from '@/api/home/userList';
import { Feature } from '@/type/index';
// import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Component({
  components: {
    // HelloWorld
  }
})
export default class Home extends Vue {
  // 这个地方必须有一个初始值这样才能进行一个处理?
  public features: Feature[] = []
  public golbalFeatures: Feature[] = []
  addFeature (e: KeyboardEvent) {
    // 这个e的target 处理起来 他是一个 event
    const inp = (e.target as HTMLInputElement)
    this.features.push({id: this.features.length+1, name: inp.value})
    inp.value = ''
  }
  created () {
    getHomeUserList().then(res => {
      this.features = res.data
    })
  }
  mounted () {
    // this.$axios.get<Feature[]>('api/list').then(res => {
    //   // console.log(123);
    //   this.golbalFeatures = res.data
    // })
    // console.log(this.$axios);
  }
}
</script>
