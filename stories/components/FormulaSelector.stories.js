import FormulaSelector from '../../src/components/FormulaSelector.vue'

const meta = {
  component: FormulaSelector
}

export default meta

export const Primary = {
  render: (args) => ({
    components: { FormulaSelector },
    setup() {
      return { args }
    },
    template: '<formula-selector />'
  })
}
