<template>
  <div class="greetings" :class="{ 'isActive': isActive }">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
</template>

<script setup>
import { ref, computed, onBeforeUpdate } from 'vue';

const isError = ref(false)

const isActive = computed(() => {
  return isError.value ? false : true
})

const props = defineProps({
  msg: {
    type: Number,
    required: true
  }
})

onBeforeUpdate(() => {
  console.log("BeforeUpdate");
  isError.value = !isError.value
})
</script>

<style scoped>
.isActive {
  color: red;
}
</style>
