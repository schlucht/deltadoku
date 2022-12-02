
import { createRouter, createWebHistory } from 'vue-router'
import Daten from './views/Daten.vue'
import Home from './views/Home.vue'
import Anlage from './views/datenviews/Anlage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Home', component: Home},
        {path: '/daten', name: 'Daten', component: Daten, children: [
            { path: ':title', name: "Anlage", component: Anlage, props: true }
        ]}
    ]
})

export  {
    router
}