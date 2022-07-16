<template>
  <div>
    <div>{{home}}</div>
    <Children name="text2"></Children>
  </div>
</template>

<script>
import Children from './Children.vue'
export default {
  name: 'Home',
  data() {
    return {
      home: "我就是一个home2",
    };
  },
  components: {
    Children
  },
};
</script>

<style lang="scss" scoped></style>
