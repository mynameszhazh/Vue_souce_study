import { Add } from './xjh.js';
// 这样就是一个正确的打开方式,一定要注意 如果是处理就一定要彻底,这个才是正确的
import Vue from 'vue';
import App from './app.vue';
console.log(123)
const app = new Vue({
  el: '#app',
  components: {
    App
  }
})