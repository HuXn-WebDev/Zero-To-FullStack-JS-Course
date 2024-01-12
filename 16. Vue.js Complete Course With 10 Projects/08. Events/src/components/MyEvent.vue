<!-- ----------------------------- -->
<!-- This code is not gonna work because it's not "reactive" -->
<!-- <script setup>
let count = 0
</script>

<template>
  <h1>Count: {{ count }}</h1>
  <button v-on:click="count++">Increment</button>
  <button @:click="count++">Increment</button>
</template> -->
<!-- ----------------------------- -->

<!-- ----------------------------- -->
<!-- This code will work because here we've used "ref" which makes our code reactive -->
<!-- This is example of "inline-event" -->
<!-- <script setup>
import { ref } from 'vue'
let count = ref(0)
</script>

<template>
  <h1>Count: {{ count }}</h1>

  v-on is a directive used to attach event listeners to DOM elements 
  <button v-on:click="count++">Increment</button>

  <button @:click="count++">Increment</button>
</template> -->
<!-- ----------------------------- -->

<!-- ----------------------------- -->
<!-- This is example of "method-event" -->
<!-- <script setup>
import { ref } from 'vue'
let count = ref(0)

const incrementCounter = () => count.value++
const decrementCounter = () => count.value--
</script>

<template>
  <h1>Count: {{ count }}</h1>
  <button @:click="incrementCounter">Increment</button>
  <button @:click="decrementCounter">Decrement</button>
</template> -->
<!-- ----------------------------- -->

<!-- ----------------------------- -->
<!-- Passing "parameters & arguments" to method -->
<!-- <script setup>
const showMessage = (message) => alert(message)
</script>

<template>
  <button @click="showMessage('This is my message')">Show Message</button>
</template> -->
<!-- ----------------------------- -->

<!-- ----------------------------- -->
<!-- You're not just limited to "click" event. -->
<script setup>
const submitHandler = (e) => {
  e.preventDefault()
  alert('valid credentials')
}
</script>

<template>
  <form v-on:submit="submitHandler">
    <input type="text" placeholder="Please enter your name" />
    <input type="text" placeholder="Please enter your email" />
    <button type="submit">Submit</button>
  </form>
</template>
<!-- ----------------------------- -->
