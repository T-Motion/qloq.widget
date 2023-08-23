import AppointmentInfo from '../../src/components/AppointmentInfo.vue'

const meta = {
  component: AppointmentInfo
}

export default meta

export const Primary = {
  render: (args) => ({
    components: { AppointmentInfo },
    setup() {
      return { args }
    },
    template: '<appointment-info />'
  })
}
