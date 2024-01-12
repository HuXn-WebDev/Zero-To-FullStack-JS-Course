<script setup>
const myChannel = 'https://www.youtube.com/@huxnwebdev'
const amazingImage =
  'https://images.unsplash.com/photo-1699646034253-0ebaa551d226?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
const altText = 'Just a random picture'

const imageWidth = 400
const imageHeight = 400
</script>

<template>
  <div>
    <!-- Old way 👇 -->
    <!-- <a v-bind:href="myChannel">HuXn WebDev Channel</a> -->

    <!-- New way 👇 -->
    <a :href="myChannel">HuXn WebDev Channel</a>
    <img :src="amazingImage" :alt="altText" :width="imageWidth" :height="imageHeight" />
  </div>
</template>
