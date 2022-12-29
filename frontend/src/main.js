import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import factoryStore from './stores/factoryStore'

const app = createApp(App)
app.use(router)
app.provide('factoryStore', factoryStore)
app.mount('#app')
