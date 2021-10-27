import Vue from 'vue'
import App from './App.vue'
import router from './krouter'
// import router from './router'
// import store from './store'
import store from './kstore'
import headering from './plugin/headering'
import message from './plugin/message'
import Bus from './utils/bus'
import ElementUI from 'element-ui';
// import create from './utils/index.js'
import create from './utils/createExtend'
import toast from './utils/toast/index'

import './test-ts'

import './assets/css/animate.css'
import 'element-ui/lib/theme-chalk/index.css';
// import './assets/js/svg'

Vue.config.productionTip = false
Vue.prototype.$bus = new Bus()
// Vue.prototype.$create = create
// Vue.prototype.$bus = new Vue()
Vue.use(headering)
Vue.use(message)
Vue.use(create)
Vue.use(ElementUI)
Vue.use(toast)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
