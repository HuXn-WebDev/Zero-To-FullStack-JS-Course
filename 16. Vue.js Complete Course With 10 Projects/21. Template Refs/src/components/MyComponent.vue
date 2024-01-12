<script setup>
import { ref } from 'vue'

const count = ref(10)
const increment = () => count.value++
const decrement = () => count.value--

// When using the <script setup>
// - It's private by default
// - A parent referencing a child won't be able to access anything.

// First we have to expose all the properties and methods
// then we'd be able to use them in parent component.
//  - use use (defineExpose) to expose our data for the parent to use.
defineExpose({ count, increment, decrement })
</script>

<template>
  <h3>Count: {{ count }}</h3>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
</template>
