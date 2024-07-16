<script setup>
const props = defineProps(['myFavNumber'])

// Props are "immutable" which means there value cannot be changed
// -- and they're just readonly.
// props.myFavNumber = 10 // ❌
</script>

<template>
  <h1>My Favorite Number: {{ props.myFavNumber }}</h1>
</template>
