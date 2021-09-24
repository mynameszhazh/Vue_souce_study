// 这个，名字的封装都是需要一个独立的名字这个样子我要的就是需要的操作才对，不过在脚手架的项目里面我就不知道这个项目的使用就不是这个样子的了，这个操作，不过这就是一个plugin的基本原理就是对的一个操作了
const myPlugin2 = {
  install (Vue, options) {
    Vue.component('message', {
      props: ['show'],
      template: `
          <transition name="fade" mode="out-in"  enter-active-class="animated tada delay-2" leave-active-class="animated bounceOutRight" appear>
            <div class='messageBox' v-if='show'>
              <slot name="start" :user='user' :names="user"></slot>
              <span @click="$emit('update:show',false)">×</span>
            </div>  
          </transition>
        `,
      data () {
        return {
          user: {
            lastName: 'xjh'
          },
          name: {
            age: 18
          }
        }
      },
      mounted () {
        this.$bus.$on('aaaa', () => {
          this.names()
        })
      },
      methods: {
        names () {
          console.log(this.user.lastName)
        }
      }
    })
  }
}

export default myPlugin2

// if (typeof window !== 'undefined' && window.Vue) {
//   window.Vue.use(myPlugin2)
// }
