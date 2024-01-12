<script setup>
const myRefFunc = (el) => {
  console.log(el.textContent) // reading text content
  el.textContent = 'Text Changed' // Changing Text Content
  el.style.color = 'red' // Changing Text Color
}
</script>

<template>
  <h1 :ref="myRefFunc">This is initial value</h1>
</template>
