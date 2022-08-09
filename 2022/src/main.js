import Vue from 'vue'
import App from './App.vue'
import './plugin/asyncComponet/index.js'
// import router from './router'
import router from './xrouter'
// import store from './store'
import store from './xstore'
// Vue.config.productionTip = false

// 注意只有在浏览器中的使用才能这样使用
Vue.prototype.$log = window.console.log

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
