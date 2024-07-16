<script setup>
import { ref } from 'vue'
const friends = ref(['HuXn', 'Jordan', 'Alex', 'Maroon 5'])
</script>

<template>
  <h3 v-for="(friend, i) in friends" :key="i">
    {{ friend }}
  </h3>
</template>
