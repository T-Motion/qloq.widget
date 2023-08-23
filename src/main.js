import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { Quasar } from 'quasar'

const app = createApp(App)
app.use(Quasar, {})

app.mount('#app')
