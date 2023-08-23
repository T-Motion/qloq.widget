import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import { setup } from '@storybook/vue3'

import 'quasar/dist/quasar.css'
import { Quasar } from 'quasar'
import '../src/assets/main.css'

setup((app) => {
  app.use(Quasar, {})
})

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
}

export default preview
