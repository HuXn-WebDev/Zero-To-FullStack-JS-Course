<script setup>
// Dynamic Binding With Multiple Attributes
const imageInfo = {
  src: 'https://images.unsplash.com/photo-1699646034253-0ebaa551d226?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  alt: 'Just a random picture',
  width: 400,
  height: 400
}
</script>

<template>
  <div>
    <!-- <img v-bind="imageInfo" /> -->
    <img :="imageInfo" />
  </div>
</template>
