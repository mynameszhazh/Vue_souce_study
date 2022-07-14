import Vue from 'vue'
import notice from '../components/notice.vue'

function create (component, props) {
  const Contr = Vue.extend(component)
  // 这个东西就是自己可以使用一个盒子一样的感觉了，就是那个组件弄出来的所有的元素合集
  const comp = new Contr({ propsData: props })
  comp.$mount()
  document.body.appendChild(comp.$el)
  comp.remove = () => {
    document.body.removeChild(comp.$el)
    comp.$destroy()
  }
  return comp
}

// 这里我导入的是一个函数就是一个很不友好的操作不是吗
// export default create
export default {
  install (Vue) {
    Vue.prototype.$notice = (props) => {
      return create(notice, props)
    }
  }
}
