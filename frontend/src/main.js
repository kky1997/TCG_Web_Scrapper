import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap' // this brings in Bootstrap 5 JS including carousel functionality

createApp(App).mount('#app') // mount the vue app here and then run this script in the index.html
