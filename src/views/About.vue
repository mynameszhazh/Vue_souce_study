<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p @click="$store.commit('add', 2)">counter {{$store.state.counter}}</p>
    <p @click="$store.dispatch('add', 2)">async counter: {{$store.state.counter}}</p>
    <!-- <p>getters: {{$store.getters.doubleCounter}}</p> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  created () {
    // this.$store.state = {}
  }
}
</script>
