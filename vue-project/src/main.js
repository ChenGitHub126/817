/*
 * @Description: 
 * @Author: 
 * @Date: 2023-09-03 00:05:55
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-09-07 01:39:19
 */
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

const vm = app.mount('#app')

app.config.errorHandler = (err, instance, info) => {
  // 处理错误，例如：报告给一个服务
  console.log('err: ', err);
  console.log('instance: ', instance);
  console.log('info: ', info);
}

console.log('vm: ', vm);
// document.addEventListener("contextmenu",(e) => {
//   e.preventDefault()
// })
