<script setup>
const props = defineProps(['name'])
console.log(props)
</script>

<template>
  <h1>{{ props.name }}</h1>
</template>
