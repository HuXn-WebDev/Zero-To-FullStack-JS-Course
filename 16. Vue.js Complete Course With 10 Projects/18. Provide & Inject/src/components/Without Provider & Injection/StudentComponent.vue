<script setup>
defineProps(['studentName', 'studentAge', 'studentLocation'])
</script>

<template>
  <h1>Student Name: {{ studentName }}</h1>
  <h1>Student Age: {{ studentAge }}</h1>
  <h1>Student Location: {{ studentLocation }}</h1>
</template>
