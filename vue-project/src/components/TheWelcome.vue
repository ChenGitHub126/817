<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Documentation</template>
    Vue’s
    <a href="https://vuejs.org/" target="_blank" rel="noopener">official documentation</a>
    provides you with all information you need to get started.
  </WelcomeItem>

  <template v-for=" (item, i) in list" :key="i">
    <div v-if="item.show">
      {{ item.text + i }}
    </div>
    <div v-else>
      error
    </div>
  </template>

  <template v-for=" (value, key, i) in myObject" :key="i">
    <div>
      {{ key }}: {{ value }} {{ i }}
    </div>
  </template>
</template>

<script setup>

import { ref, reactive } from 'vue';
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'

  const list = ref([{
    show: false,
    text: "A"
  }, {
    show: true,
    text: "B"
  }])

  defineExpose({
  list
})

  const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10'
})

function changeList() {

}
</script>
