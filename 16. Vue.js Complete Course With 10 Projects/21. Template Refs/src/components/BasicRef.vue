<script setup>
import { onMounted, ref } from 'vue'
const myRef = ref('')

// Here we'll get the value
// console.log(myRef.value)

onMounted(() => {
  // Here we'll get the entire HTML element
  console.log(myRef.value)
  myRef.value.focus()
  myRef.value.value = 'something'
})
</script>

<template>
  <div>
    <input type="text" placeholder="Enter Your Name" ref="myRef" />
  </div>
</template>
