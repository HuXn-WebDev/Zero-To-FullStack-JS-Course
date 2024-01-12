<script setup>
// Basics
// const props = defineProps({
//   fullName: String,
//   age: Number
// })

// Complex Validation Schema
const props = defineProps({
  fullName: {
    type: String,
    required: true,
    default: 'Anonymous'
  },

  age: Number
})
</script>

<template>
  <h1>Name: {{ fullName }}</h1>
  <h2>Age: {{ age }}</h2>
</template>
