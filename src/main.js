import { createApp } from 'vue'
import './style.css'
import 'tw-elements';
import App from './App.vue'
import router from './router/index'
import store from './stores/index'

createApp(App).use(router).use(store).mount('#app')
