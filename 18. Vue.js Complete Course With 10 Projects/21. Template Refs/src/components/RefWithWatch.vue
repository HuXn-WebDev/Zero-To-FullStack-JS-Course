<script setup>
import { ref, watchEffect } from 'vue'
const inputRef = ref()

watchEffect(() => {
  console.log('WatchEffect Called')
  console.log('InputRef Value', inputRef.value)

  if (inputRef.value) {
    console.log(inputRef.value)
    inputRef.value.focus()
  } else {
    // When using watchers with ref, You also have to handle the "null" case
    console.log('not mounted yet, or the element was unmounted (e.g by v-if)')
  }
})
</script>

<template>
  <div>
    <input type="text" ref="inputRef" />
  </div>
</template>
