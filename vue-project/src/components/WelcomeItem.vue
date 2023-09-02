<!--
 * @Description: 
 * @Author: 
 * @Date: 2023-09-03 00:05:55
 * @LastEditors: 
 * @LastEditTime: 2023-09-03 01:12:36
-->
<template>
  <div class="item">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>

</style>
