import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import PreSubmit from './PreSubmit.vue'
import Index from './Index.vue'
import About from './about.vue'
import Settings from './settings.vue'
import Template from "./template.vue"

import Header from './components/Header.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/index', component: Index },
        { path: '/about', component: About },
        { path: '/settings', component: Settings },
        { path: '/template', component: Template },
    ]
});


const app = createApp(PreSubmit)
app.component('PSHeader', Header)
app.use(router);
app.mount('#app')
