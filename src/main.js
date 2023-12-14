import { createApp } from 'vue'
import Index from './Index.vue'
import Header from './components/Header.vue'

const app = createApp(Index)
app.component('headerModule', Header)
app.mount('#app')
