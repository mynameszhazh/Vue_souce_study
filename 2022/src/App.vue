<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" @click="goHome" />
    <router-link to="/detail/1">detail1</router-link>
    <router-link to="/detail/2">detail2</router-link>
    <router-view></router-view>
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
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
