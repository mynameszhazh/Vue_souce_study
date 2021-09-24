import create from './create'
import notice from '../components/notice.vue'

export default {
  install (Vue) {
    Vue.prototype.$notice = (props) => {
      return create(notice, props)
    }
  }
}
