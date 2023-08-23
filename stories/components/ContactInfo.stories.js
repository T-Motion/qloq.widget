import ContactInfo from '../../src/components/ContactInfo.vue'

const meta = {
  component: ContactInfo
}

export default meta

export const Primary = {
  render: (args) => ({
    components: { ContactInfo },
    setup() {
      return { args }
    },
    template: '<contact-info />'
  })
}
