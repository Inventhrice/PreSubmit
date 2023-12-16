import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
let path = "./pages/"
import PreSubmit from './PreSubmit.vue'
import Header from './components/Header.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: () => import(path + 'Index.vue') },
        { path: '/about', component: () => import(path + 'about.vue') },
        { path: '/settings', component: () => import(path + 'settings.vue') },
        { path: '/template', component: () => import(path + 'template.vue') },
        { path: '/fileUpload', component: () => import(path + 'fileUpload.vue') },
        { path: '/conditions', component: () => import(path + 'templateEditor.vue') }
    ]
})


const app = createApp(PreSubmit)
app.component('PSHeader', Header)
app.use(router)
app.mount('#app')
