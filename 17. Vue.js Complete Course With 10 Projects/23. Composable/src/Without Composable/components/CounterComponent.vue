<!-- Here is a question: -->
<!-- What if i wanna use this logic in another component, How can i go about doing that? -->
<!--  - Your first answer will be: Well just call the component in another place -->
<!--   -- To call the component in another place it's gonna give us all the UI (template) in another component as well -->

<!-- The Solution is to extract all the logic from this component and create a separate Composable  -->
<!--  - Creating a separate composable will allow us to reuse that logic in overall application -->
<!--   - & make our code totally clean & organized -->

<script setup>
import { ref } from 'vue'
let count = ref(0)

const increment = () => count.value++
const decrement = () => count.value--
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>
