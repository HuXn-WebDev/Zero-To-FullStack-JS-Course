<script setup>
import { reactive, watch } from 'vue'
const state = reactive({ username: 'alex' })

// Here we can't provide specific property of object
// - we have to provide the entire object, otherwise it's gonna give us error in the console.
watch(state, (newVal, oldVal) => {
  // If we're using "object" both the new & the old values will be the same
  console.log('new value', newVal)
  console.log('old value', oldVal)
})
</script>

<template>
  <h1>{{ state.username }}</h1>
  <button @click="state.username = 'jordan'">Change Name</button>
</template>
