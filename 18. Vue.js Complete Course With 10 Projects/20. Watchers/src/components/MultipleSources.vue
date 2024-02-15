<script setup>
import { ref, watch } from 'vue'
const username = ref('jordan')
const counter = ref(0)

watch([username, counter], (newVal, oldVal) => {
  console.log('New Value', newVal)
  console.log('Old Value', oldVal)
})
</script>

<template>
  <h1>{{ username }}</h1>
  <h1>{{ counter }}</h1>

  <button @click="username = 'HuXn'">Change Name</button>
  <button @click="counter++">Increment Counter</button>
</template>
