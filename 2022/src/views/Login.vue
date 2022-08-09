<template>
  <div ref="box">
    <div class="login-page">
      <h1 ref="h1">我是一个登录页面{{this.$store.state.counter}}</h1>
      <h2>这是一个getter {{this.$store.getters.doubleCounter}}</h2>
      <button ref="btn1" v-if="!isLogin" @click="login">登录</button>
      <button v-else @click="loginOut">注销</button>
    </div>
    <div class="test-btn">
      <button @click="routePathChange(2)">routePathChange</button>
      <button @click="counterChange">counterChange</button>
      <button @click="countergetChange">counterChange2</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      islogin: false,
    };
  },
  methods: {
    login() {
      window.isLogin = true;
      this.islogin = true;
      if (!this.$route.query.redirect) return;
      this.$router.push(this.$route.query.redirect);
    },
    loginOut() {
      window.isLogin = false;
      this.islogin = false;
      if (!this.$route.query.redirect) return;
      this.$router.push(this.$route.query.redirect);
    },
    counterChange() {
      this.$store.commit('add', 2)
    },
    countergetChange() {
      this.$store.dispatch('add',1)
    },
    routePathChange(index) {
      if(index == 1) {
        this.$router.push({path: `/detail/1`})
      } else if(index == 2) {
        this.$router.push({
          name: 'Home',
          params: {
            id: 1
          }
        })
      } else {
        this.$router.push({
          path: '/home',
          query: {
            id: 1
          }
        })
      }
    },
  },
  mounted() {
    // console.log(this.$refs['box'].getBoundingClientRect().left)
    // console.log(this.$refs['h1'].getBoundingClientRect().left)
    // console.log(this.$refs['btn1'].getBoundingClientRect().left)
  },
  computed: {
    isLogin() {
      // 这里我所有的登录状态都是在这里进行一个改变
      return window.isLogin || this.islogin;
    },
  },
};
</script>

<style lang="scss" scoped></style>
