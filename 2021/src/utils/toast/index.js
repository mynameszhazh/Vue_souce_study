import Toast from './toast.vue'

const obj = {}
obj.install = function (Vue) {
  // 生成一个组件构造器这样
  const Constructor = Vue.extend(Toast)
  const toast = new Constructor()
  // 上面的操作就是一个关于render函数的封装操作吗？

  toast.$mount(document.createElement('div'))
  document.body.appendChild(toast.$el)
  // 我这个组件里面的一些操作挂载在了一些地方
  // console.log(Toast)
  Vue.prototype.$toast = toast
}
export default obj
