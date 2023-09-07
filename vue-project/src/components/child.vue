<!--
 * @Description: 
 * @Author: 
 * @Date: 2023-09-06 17:32:30
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-09-07 16:11:22
-->
<script setup>
import { ref, onMounted, watch, watchEffect } from 'vue';
import HelloWorld from './HelloWorld.vue';
import TheWelcome from './TheWelcome.vue';

const emit = defineEmits(['handleFontsize'])
const arrRefs = ref([])
const currentTab = ref('HelloWorld')

const tabs = {
  HelloWorld,
  TheWelcome
}
const arr = ref([{
  id: 0,
  desc: "text1"
},{
  id: 1,
  desc: "text2"
},{
  id: 999,
  desc: "error",
  error: true
},{
  id: 2,
  desc: "text3"
}])

onMounted(() => {
  console.log("onMounted ", "child ", arrRefs.value);

  setTimeout(() => {
    // 可以监听到变化的数组方法 push pop shift unshift splice sort reverse
    // 会改变原始数组
    arr.value.push({
      id: 3,
      desc: "text4"
    })

    // 无法监听到的数组方法 concat filter slice 等
    // 因为这些方法不会改变原数组，而是返回一个新数组
    // 可以给源数据重新赋值来解决，不会导致全部重新渲染
    arr.value = arr.value.filter((i) => {
      return !i.error
    })

    // 或用计算属性 computed
  }, 2000)
})

watch(arr, (newArr, oldArr) => {
  // 侦听数组时，新旧值是一样的，均为新值
  console.log(newArr, oldArr);
}, {deep: true})

// 无需指定监听对象，会自动监听依赖的响应式数据
// 回调需要依赖多个响应式数据时，不用手动维护依赖列表
// 数据有复杂的嵌套结构时只跟踪回调中被使用到的属性，比深度监听有更好的性能
// 会立即执行一次
watchEffect(() => {
  // 侦听数组时
  // 仅侦听value时无效
  // 在使用 watchEffect 监听数组中某一项的变化时，不能直接访问数组本身，而是要访问数组的某一项才能触发监听函数的执行。这是因为 watchEffect 函数只能监听到被访问的响应式数据，而无法监听到未被访问的响应式数据。
  // console.log(arr.value);
  // 有效
  console.log(arr.value[0]);
})

function removeItem(i,e) {
  arr.value.splice(i, 1)
}

function handleDomRef(el) {
  // 无效
  // ref :ref 同时存在时,顺序在前的生效
  console.log('el: ', el);
}

</script>

<template>
  <div class="demo">
    <button
       v-for="(_, tab) in tabs"
       :class="['tab-button', { active: currentTab === tab }]"
       @click="currentTab = tab">
      {{ tab }}
    </button>
    <div class="tab">
      <component :is="tabs[currentTab]"></component>
    </div>
  </div>
  <ul>
    <li v-for="(v, i) in arr" :key="v.id" ref="arrRefs" :ref="handleDomRef">
      {{ v.desc }}
      <button @click.prevent.right="removeItem(i, $event)">
        remove
      </button>
    </li>
  </ul>
  <button @click="$emit('handleFontsize')">放大</button>
  <slot />
</template>

<style scoped>
.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}

.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>