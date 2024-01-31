<script setup>
import { ref } from 'vue'
const username = ref('')
const email = ref('')
const password = ref('')
</script>

<template>
  <form @submit.prevent="$emit('userInfo', username, email, password)">
    <input type="text" v-model="username" />
    <input type="email" v-model="email" />
    <input type="password" v-model="password" />
    <button type="submit">Submit</button>
  </form>
</template>
