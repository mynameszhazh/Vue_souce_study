<template>
  <div class="message">
    <transition
      name="fade"
      mode="out-in"
      enter-active-class="animated tada delay-2"
      leave-active-class="animated bounceOutRight"
      appear
    >
      <div class="messageBox" v-if="show">
        <slot name="start" :user="user" :names="user"></slot>
        <!-- 这个东西也能获取到一个很好用的数据这个也是比较牛逼的一个东西 -->
        <span>{{bar}}</span>
        <!-- 这里的$emit 这个emit是vue里面的东西，不是什么简简单单的eventbus 这样的东西也能解决一个问题的存在 -->
        <span @click="$emit('update:show', false)">×</span>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ['show'],
  // 这是一个别名的操作，也是一个很重要的东西
  inject: { bar: { from: 'foo' } },
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
      // console.log(1)
      this.names()
    })
    // 这个玩意的操作只有组件才会之间进行一个很好的传递这个样子，其它的操作我都不知道他是在干什么东西
    // console.log(this.$children)
    // console.log(this.$attrs)
  },
  destroyed () {
    this.$bus.$off('aaaa')
  },
  methods: {
    names () {
      // debugger
      console.log(this.user.lastName)
    }
  }
}
</script>

<style lang="scss" scoped>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s;
}
</style>
