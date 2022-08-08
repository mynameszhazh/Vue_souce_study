export default {
  props: {
    to: {
      type: String,
      required: true
    }
  },
  render(h) {
    return h('a', { attrs: { href: '#' + this.to }, class: 'router-link' }, this.$slots.default)
  }
}