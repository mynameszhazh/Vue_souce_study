<template>
  <div>
    <h2>detail pages</h2>
    <p>{{ $route.params.id }}</p>
    <Home2></Home2>
  </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    beforeRouteEnter(to, from, next) {
      // console.log(to, 'beforeRouteEnter'); 
      // console.log(from, 'beforeRouteEnter'); 
      // console.log(next, 'beforeRouteEnter'); 
      next()
    },
    beforeRouteUpdate(to, from ,next) {
      // console.log(to, from ,next , 'beforeRouteUpdate'); 
      next()
    },
    watch: {
      // $route: {
        //     immediate: true,
        //     deep: true,
        //     handler() {
        //         console.log("router, change");
        //     }
        // }
    },
    created () {
      console.log('created');
    },
    mounted () {
      console.log('mounted');
    },  
};
</script>

<style lang="scss" scoped></style>
