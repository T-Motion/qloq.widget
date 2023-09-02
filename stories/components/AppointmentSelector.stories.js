import AppointmentSelector from '../../src/components/AppointmentSelector/AppointmentSelector.vue'

const meta = {
  component: AppointmentSelector
}

export default meta

export const Primary = {
  render: (args) => ({
    components: { AppointmentSelector },
    setup() {
      return { args }
    },
    template: '<appointment-selector />'
  })
}
