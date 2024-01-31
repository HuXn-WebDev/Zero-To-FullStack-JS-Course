<script setup>
import StudentComponent from './StudentComponent.vue'
defineProps(['studentName', 'studentAge', 'studentLocation'])
</script>

<template>
  <StudentComponent
    :studentName="studentName"
    :studentAge="studentAge"
    :studentLocation="studentLocation"
  />
</template>
