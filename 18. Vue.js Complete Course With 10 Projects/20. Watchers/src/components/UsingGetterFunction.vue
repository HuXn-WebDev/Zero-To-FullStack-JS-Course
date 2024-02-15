<script setup>
import { reactive, watch } from 'vue'
const state = reactive({ username: 'alex' })

// Now if we want to get the "old" & the "new" values separately,
// - for that we'll have to pass a getter function.
// - & here we have to specify the actual object/state "property".

watch(
  () => state.username,
  (newVal, oldVal) => {
    console.log('new value', newVal)
    console.log('old value', oldVal)
  }
)
</script>

<template>
  <h1>{{ state.username }}</h1>
  <button @click="state.username = 'jordan'">Change Name</button>
</template>
