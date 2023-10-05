import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './style.css'

import App from './App.vue'
import router from './router'

import '@fortawesome/fontawesome-free/css/all.css';

createApp(App)
.use(createPinia())
.use(router)
.mount('#app')
