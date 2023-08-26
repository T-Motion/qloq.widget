import WidgetView from '../src/views/WidgetView.vue'

const meta = {
  component: WidgetView
}

export default meta

export const Primary = {
    parameters: {
      mockData: [
          {
              url: '/api/test',
              method: 'POST',
              status: 200,
              response: {
                  data: 'Hello storybook-addon-mock!',
              },
          },
      ],
  },
  render: (args) => ({
    components: { WidgetView },
    setup() {
      return { args }
    },
    template: '<widget-view />'
  })
}
