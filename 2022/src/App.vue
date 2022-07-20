<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" @click="goHome" />
    <router-link to="/detail/1">detail1</router-link>
    <router-link to="/detail/2">detail2</router-link>
    <!-- <transition name="fade"> -->
      <!-- <keep-alive> -->
        <!-- <router-view :key="$route.fullPath"></router-view> -->
        <router-view></router-view>
      <!-- </keep-alive> -->
    <!-- </transition> -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goHome() {
      this.$router.push("/home");
    },
  },
};
</script>
<style scoped lang="scss">
/* #app {
  font-family: avenir, helvetica, arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
