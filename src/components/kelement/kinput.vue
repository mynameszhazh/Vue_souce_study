<template>
<!--  -->
  <div class="input">
    <input :type="type" :value='value' @input="onInput" v-bind="$attrs">
  </div>
</template>

<script>
import emitter from '@/utils/emitted'
export default {
  // 现在好像不用使用到这个属性了
  inheritAttrs: false,
  mixins: [emitter],
  props: {
    value: {
      type: String,
      require: true,
      default: ''
    },
    type: {
      type: String,
      require: true,
      default: 'text'
    },
    name: {
      type: String,
      require: true,
      default: 'text'
    }
  },
  methods: {
    onInput (e) {
      // 这个操作是一个作为双向绑定的基础？
      this.$emit('input', e.target.value)
      // this.$parent.$emit('validate')
      this.dispatch('kFromItem', 'validate')
    }
  }
}
</script>

<style>

</style>
