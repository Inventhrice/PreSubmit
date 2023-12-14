import { createApp } from 'vue'

import Index from './Index.vue'
import About from './about.vue'
import Settings from './settings.vue'
import templateEditor from "./templateEditor.vue"
import FileUpload from "./fileUpload.vue"

import Header from './components/Header.vue'

const app = createApp(Index)
app.component('headerModule', Header)
app.component('aboutBlurb', About)
app.mount('#app')
