<template>
  <div ref="box">
    <h1 ref="h1">我是一个登录页面</h1>
    <button ref="btn1" v-if="!isLogin" @click="login">登录</button>
    <button v-else @click="loginOut">注销</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        islogin: false
      }
    }, 
    methods: {
      login() {
        window.isLogin = true 
        this.islogin = true 
        if(!this.$route.query.redirect) return
        this.$router.push(this.$route.query.redirect)
      },
      loginOut() {
        window.isLogin = false 
        this.islogin = false 
        if(!this.$route.query.redirect) return
        this.$router.push(this.$route.query.redirect)
      }
    },
    mounted () {
      // console.log(this.$refs['box'].getBoundingClientRect().left) 
      // console.log(this.$refs['h1'].getBoundingClientRect().left) 
      // console.log(this.$refs['btn1'].getBoundingClientRect().left) 
    },
    computed: {
      isLogin() {
        // 这里我所有的登录状态都是在这里进行一个改变
        return  window.isLogin || this.islogin
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>