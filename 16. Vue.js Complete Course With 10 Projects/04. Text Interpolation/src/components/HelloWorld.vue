<script setup>
const myMessage = 'Yellow World'
const myNumber = 100

function add(x, y) {
  return x + y
}
</script>

<template>
  <div>
    <h1>{{ myMessage }}</h1>
    <h1>{{ myNumber }}</h1>
    <h1>2 + 2 = {{ 2 + 2 }}</h1>
    <h1>Add Two Numbers: {{ add(2, 2) }}</h1>
    <!-- <p>Not allowed: {{ const myName = 'huxn' }}</p> ❌ -->
  </div>
</template>
