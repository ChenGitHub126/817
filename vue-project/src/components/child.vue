<script setup>
import { ref, onMounted, watch, watchEffect } from 'vue';

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
  setTimeout(() => {
    // 可以监听到变化的数组方法 push pop shift unshift splice sort reverse
    // 会改变原始数组
    arr.value.push({
      id: 3,
      desc: "text4"
    })
    arr.value.reverse()

    // 无法监听到的数组方法 concat filter slice 等
    // 因为这些方法不会改变原数组，而是返回一个新数组
    // 可以重新赋值给ref来解决，不会全部重新渲染
    arr.value = arr.value.filter((i) => {
      return !i.error
    })

    // 或用计算属性 computed
  }, 2000)
})

watch(arr, (newArr, oldArr) => {
  console.log(newArr, oldArr);
})

// 无需指定监听对象，会自动监听依赖的响应式数据
// 回调需要依赖多个响应式数据时，不用手动维护依赖列表
// 数据有复杂的嵌套结构时只跟踪回调中被使用到的属性，比深度监听有更好的性能
watchEffect(() => {
  console.log(arr.value);
})

function removeItem(i,e) {
  arr.value.splice(i, 1)
}
</script>

<template>
  <ul>
    <li v-for="(v, i) in arr" :key="v.id">
      {{ v.desc }}
      <button @click.prevent.right="removeItem(i, $event)">
        remove
      </button>
    </li>
  </ul>
</template>

<style scoped>

</style>