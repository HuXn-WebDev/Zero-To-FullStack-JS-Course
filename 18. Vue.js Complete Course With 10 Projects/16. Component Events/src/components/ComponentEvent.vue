<script setup>
// We don't have to declare events but it's good practice & also great for other engineers
defineEmits(['increment']) // 👈 Declaring Events
</script>

<template>
  <button @click="$emit('incrementCount')">Increment</button>
</template>
