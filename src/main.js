import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'swiper/css';
import Vue3Marquee from 'vue3-marquee'
import router from './router';

createApp(App).use(Vue3Marquee).use(router).mount('#app')


