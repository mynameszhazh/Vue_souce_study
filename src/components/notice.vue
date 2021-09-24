<template>
  <div class="notice" v-if='isshow'>
    <h3>{{title}}</h3>
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      title: String,
      require: true,
      default: ''
    },
    message: {
      title: String,
      require: true,
      default: ''
    },
    duration: {
      title: Number,
      require: true,
      default: 0
    }
  },
  data () {
    return {
      isshow: false
    }
  },
  methods: {
    hide () {
      this.isshow = false
      this.remove()
    },
    // 想要更加简单的操作，这个组件本身的操作参数传递就是一个很了不起的东西
    // 如果你想要用一个intall函数来进行一个疯转都是可以，这就是两个不同的选择方式罢了，不知道那个更好吧
    show () {
      this.isshow = true
      // 这种写法不是很优雅不是吗
      setTimeout(this.hide, this.duration)
    }
  }
}
</script>

<style lang="scss" scoped>
  .notice {
    position: fixed;
    top: 10px;
    left: 50%;
    transform: translate(-50%);
    width: 300px;
    height: 50px;
    background-color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid gray;
    h3 {
      text-align: center;
      margin-right: 20px;
    }
    p {
      text-align: center;
    }
  }
</style>
