/*
 * @Description: 
 * @Author: 
 * @Date: 2023-09-03 00:05:55
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-09-04 12:45:30
 */
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

const vm = app.mount('#app')

console.log('vm: ', vm);
