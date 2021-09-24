<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  componentName: 'kFrom',
  provide () {
    return {
      form: this
    }
  },
  data () {
    return {
      files: []
    }
  },
  created () {
    // 有些东西错的真是让人有点理解不了事情了
    this.$on('el.from.validate', (item) => {
      if (item) {
        this.files.push(item)
      }
    })
  },
  props: {
    model: {
      type: Object,
      require: true
    },
    rules: {
      type: Object
    }
  },
  methods: {
    // 这里利用利用的是回调函数的形式做出来的一个操作
    validate (cb) {
      // const task = this.$children
      //   .filter(item => item.prop)
      //   .map(item => item.validate())
      const task = this.files.map(item => item.validate())
      Promise.all(task)
        .then(() => {
          // eslint-disable-next-line standard/no-callback-literal
          return cb(true)
        })
        .catch(() => {
          // eslint-disable-next-line standard/no-callback-literal
          return cb(false)
        })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
