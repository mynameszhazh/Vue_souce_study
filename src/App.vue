<template>
  <div id="app">
    <router-link to='/home'>
      <svg class="svg">
        <use xlink:href='#icon-shake'></use>
      </svg>
      home
    </router-link>
    <router-link to='/about' class="app-about">
    <svg class="svg">
        <use xlink:href='#icon-source'></use>
      </svg>about</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// import '@/icons/svg/shake.svg'

export default {

}
</script>

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
  .svg {
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }
}

</style>
