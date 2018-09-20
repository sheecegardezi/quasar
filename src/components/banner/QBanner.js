export default {
  name: 'QBanner',
  props: {
    inlineActions: Boolean
  },

  computed: {
    classes () {
      return {}
    }
  },

  render (h) {
    const actions = this.$slots.action

    return h('div', {
      staticClass: 'q-banner row items-center',
      'class': {
        'q-banner--top-padding': actions && !this.inlineActions,
        ...this.classes
      }
    }, [
      h('div', {
        staticClass: 'q-banner__avatar col-auto row items-center'
      }, this.$slots.avatar),

      h('div', {
        staticClass: 'q-banner__content col text-body2'
      }, this.$slots.default),

      (actions && h('div', {
        staticClass: 'q-banner__actions row items-center justify-end',
        'class': this.inlineActions ? 'col-auto' : 'col-12'
      }, actions)) || void 0
    ])
  }
}
