<template>
  <div>
    <label v-if='label'>{{label}}</label>
    <slot></slot>
    <!-- 前面的我是用这个方法的时候有没有考虑过一个很严重的问题，就是关于这个东西的其它校验方式呢，这样的校验是觉得的傻逼行为 -->
    <!-- <p v-if="form.model.user">{{error}}</p> -->
    <p v-if="error">{{error}}</p>
  </div>
</template>

<script>
import Schema from 'async-validator'

export default {
  inject: ['form'],
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String
    }
  },
  computed: {
    // error () {
    //   return this.form.rules[0].msg
    // },
    // iserror () {
    //   return this.form.model.userinfo
    // }
  },
  data () {
    return {
      error: ''
    }
  },
  methods: {
    validate () {
      const value = this.form.model[this.prop]
      const rules = this.form.rules[this.prop]
      const desc = { [this.prop]: rules }
      // console.log({ [this.prop]: value })
      const schema = new Schema(desc)
      return schema.validate({ [this.prop]: value }, (errors, fields) => {
        // console.log(errors)
        if (errors) {
          // console.log(errors[0].message)
          this.error = errors[0].message
        } else {
          this.error = ''
        }
      })
    }
  },
  mounted () {
    // this.$bus.$on('input', (value) => {
    // })
    this.$on('validate', () => {
      // console.log('validate')
      this.validate()
    })
  },
  destroyed () {
    this.$bus.$off('input')
  }
}
</script>

<style lang="sass" scoped>

</style>
