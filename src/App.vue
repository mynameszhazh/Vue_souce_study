<template>
  <div id="app">
    <router-link to="/home">home</router-link>
    <router-link to="/about" class="app-about">about</router-link>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .app-about {
    margin-left: 10px;
  }
}
</style>
