<template>
  <div>
    <h2>detail pages</h2>
    <p>{{ $route.params.id }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  watch: {
    $route: {
      immediate: true,
      deep: true,
      handler() {
        console.log('router, change')  
      }
    }
  },
};
</script>

<style lang="scss" scoped></style>
