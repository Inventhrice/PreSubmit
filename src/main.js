import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import PreSubmit from './PreSubmit.vue'
import Header from './components/Header.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: () => import('./Index.vue') },
        { path: '/about', component: () => import('./about.vue') },
        { path: '/settings', component: () => import('./settings.vue') },
        { path: '/template', component: () => import('./template.vue') },
        { path: '/fileUpload', component: () => import('./fileUpload.vue') }
    ]
})


const app = createApp(PreSubmit)
app.component('PSHeader', Header)
app.use(router)
app.mount('#app')
