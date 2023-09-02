<template>
  <header>
    <HelloWorld :msg="1+msg" />
    {{ key+id }}
    <button @click="fun">click</button>
  </header>
  <main>
    <TheWelcome />
  </main>
</template>

<script setup>
import { reactive, ref } from "vue"
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'

const msg = ref(0)
const count = reactive({value: 1 })
const obj = {key: ref(0), id: ref(1)}
const { key, id } = obj

function fun () {
  msg.value++
  key.value++;
  id.value++
}
</script>

<style scoped>

</style>
