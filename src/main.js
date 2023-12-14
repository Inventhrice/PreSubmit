import { createApp } from 'vue'
import Index from './Index.vue'
import Header from './components/Header.vue'
import About from './components/about.vue'

const app = createApp(Index)
app.component('headerModule', Header)
app.component('aboutBlurb', About)
app.mount('#app')
