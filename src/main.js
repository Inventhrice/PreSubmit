import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import PreSubmit from './PreSubmit.vue'

import Header from './components/Header.vue'
import RootPath from './pages/Index.vue'
import About from './pages/about.vue'
import Settings from './pages/settings.vue'
import Template from './pages/template.vue'
import Conditions from './pages/templateEditor.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: RootPath },
        { path: '/about', component: About },
        { path: '/settings', component: Settings },
        { path: '/template', component: Template },
        { path: '/process', component: Conditions }
    ]
})


const app = createApp(PreSubmit)
app.component('PSHeader', Header)
app.use(router)
app.mount('#app')
