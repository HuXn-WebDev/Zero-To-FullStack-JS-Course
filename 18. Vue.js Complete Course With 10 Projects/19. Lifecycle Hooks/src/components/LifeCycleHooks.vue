<script setup>
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted
} from 'vue'
const message = ref('Hello, Vue!')
const isComponentMounted = ref(true)

// Lifecycle hooks
onBeforeMount(() => {
  console.log('Component is about to be mounted')
})

onMounted(() => {
  console.log('Component has been mounted')
})

onBeforeUpdate(() => {
  console.log('Component is about to update')
})

onUpdated(() => {
  console.log('Component has been updated')
})

onBeforeUnmount(() => {
  console.log('Component is about to be unmounted')
})

onUnmounted(() => {
  console.log('Component has been unmounted')
})

const updateMessage = () => {
  message.value = 'Updated Message!'
}

const unmountComponent = () => {
  // Update the reactive variable to conditionally render the unmounted message
  isComponentMounted.value = false
}
</script>

<template>
  <div v-if="isComponentMounted">
    <p>{{ message }}</p>
    <button @click="updateMessage">Update Message</button>
    <button @click="unmountComponent">Unmount Component</button>
  </div>
  <div v-else>
    <p>Component has been unmounted</p>
  </div>
</template>
