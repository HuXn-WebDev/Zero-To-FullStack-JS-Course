<script setup>
defineProps({
  friends: Array,
  userInfo: Object
})
</script>

<template>
  <h1>{{ friends }}</h1>
  <h1>{{ userInfo }}</h1>

  <!-- Iterating Over Friends Array -->
  <ul v-for="(friend, index) in friends" :key="index">
    <li>{{ friend }}</li>
  </ul>
  
  <hr />

  <ul v-for="(info, i) in userInfo" :key="i">
    <li>{{ info }}</li>
  </ul>
</template>
