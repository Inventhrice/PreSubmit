import { createApp } from 'vue'

import PreSubmit from './PreSubmit.vue'
import Index from './Index.vue'
import About from './about.vue'
import Settings from './settings.vue'
import Template from "./template.vue"

import Header from './components/Header.vue'

const app = createApp(PreSubmit)
app.component('PSHeader', Header)
app.component('Index', Index)
app.component('About', About)
app.component('Settings', Settings)
app.component('Templates', Template)
app.mount('#app')
