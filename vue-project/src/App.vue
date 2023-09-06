<!--
 * @Description: 
 * @Author: 
 * @Date: 2023-09-03 00:05:55
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-09-07 01:37:28
-->
<template>
  <header>
    <HelloWorld :msg="1+msg" />
    <p>{{ key+id }}</p>
    <p>{{ show }}</p>
    <button @click="fun">click</button>
    <p>{{ x }}, {{ y }}</p>
  </header>
  <main>
    <TheWelcome ref="child"/>
  </main>
  <footer>
    <child/>
  </footer>
</template>

<script setup>
import { reactive, ref, computed, onMounted, onErrorCaptured } from "vue"
import { useMouse } from './common/plug.js'
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Child from './components/child.vue'

// data 属性
const child = ref(null)
const msg = ref(0)
const count = reactive([
  {
    value: 1
  }
])
const obj = {key: ref(0), id: ref(1)}
const { key, id } = obj
const { x, y } = useMouse()

// 计算属性 computed
const show = computed(() => {
  return count.length > 0 ? "YES" : "NO"
})

// 方法 method
function fun () {
  msg.value++
  key.value++;
  id.value++
  count.splice(0)
  child.value.list.push({
    show: true,
    text: "C"
  })
}

// 生命周期
onMounted(() => {
  console.log("onMounted", "App");
})

onErrorCaptured((err, instance, info) => {
  console.log('err: ', err);
  console.log('instance: ', instance);
  console.log('info: ', info);
})
</script>

<style scoped>

</style>
