import { createApp } from 'vue'
import { createPinia } from 'pinia'
import factoryStore from './stores/factories.js'

import App from './App.vue'
import router from './router'

import './assets/styles/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.provide('factoryStore', factoryStore)
app.mount('#app')
