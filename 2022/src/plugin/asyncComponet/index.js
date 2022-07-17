import Vue from 'vue'

import Loading from './Loading.vue'
import Error from './Error.vue'

// 工厂函数返回一个配置化组件对象
const AsyncComponent = () => ({
  // 需要加载的组件 (应该是一个 `Promise` 对象)
  component: import('./Home2.vue'),
  // 异步组件加载时使用的组件
  loading: Loading, 
  // 加载失败时使用的组件
  error: Error,
  // 展示加载时组件的延时时间。默认值是 200 (毫秒)
  delay: 200,
  // 如果提供了超时时间且组件加载也超时了，
  // 则使用加载失败时使用的组件。默认值是：`Infinity`
  timeout: 3000
})

Vue.component(
  'Home2',
  AsyncComponent
)