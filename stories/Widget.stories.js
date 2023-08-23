import WidgetView from '../src/views/WidgetView.vue'

const meta = {
  component: WidgetView
}

export default meta

export const Primary = {
  render: (args) => ({
    components: { WidgetView },
    setup() {
      return { args }
    },
    template: '<widget-view />'
  })
}
