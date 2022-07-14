<template>
  <div class="toast" v-if="isshow">
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isshow: false,
      message: ''
    }
  },
  methods: {
    show (msg = '默认文字', duration = 2000) {
      this.isshow = true
      this.message = msg
      setTimeout(() => {
        this.hide()
      }, duration)
    },
    hide () {
      this.isshow = false
      this.message = ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    height: 30px;
    width: 100px;
    background-color: rgba(0,0,0,.5);
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      color: #fff;
    }
  }
</style>
