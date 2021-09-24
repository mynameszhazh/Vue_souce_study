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
