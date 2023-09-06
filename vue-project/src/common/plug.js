/*
 * @Description: 
 * @Author: 
 * @Date: 2023-09-04 12:04:43
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-09-04 12:36:07
 */
import { ref, onMounted, onUnmounted } from 'vue'

// 按照惯例，组合式函数名以“use”开头
// 添加和删除事件监听
export function useEventListener(target, event, callback) {
  // 如果你想的话，
  // 也可以用字符串形式的 CSS 选择器来寻找目标 DOM 元素
  onMounted(() => {
    console.log("plug");
    target.addEventListener(event, callback)
  })
  onUnmounted(() => {
    target.removeEventListener(event, callback)
  })
}

export function useMouse() {
  // 被组合式函数封装和管理的状态
  const x = ref(0)
  const y = ref(0)

  // 组合式函数可以随时更改其状态。
  function update(event) {
    x.value = event.pageX
    y.value = event.pageY
  }

  // 一个组合式函数也可以挂靠在所属组件的生命周期上
  // 来启动和卸载副作用
  useEventListener(window, "mousemove", update)

  // 通过返回值暴露所管理的状态
  return { x, y }
}