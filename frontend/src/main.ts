import { createApp } from 'vue'
import { router } from './router'
import  store  from './store'
import './style.scss'
import App from './App.vue'

const app = createApp(App)
app.use( router )
app.provide( "store", store )
app.mount('#app')
