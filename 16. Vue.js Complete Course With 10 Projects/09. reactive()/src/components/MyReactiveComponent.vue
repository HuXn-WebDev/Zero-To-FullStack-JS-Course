<!-- ------------------------------- -->
<!-- This code is not gonna work because in "reactive" we can't use (primitive data types) -->

<!-- <script setup>
import { reactive } from 'vue'
let initialState = reactive(0)
</script>

<template>
  <h1>Count: {{ initialState.count }}</h1>
</template> -->
<!-- ------------------------------- -->

<!-- ------------------------------- -->
<!-- Example 1 -->

<!-- <script setup>
import { reactive } from 'vue'
let initialState = reactive({ count: 0 })
</script>

<template>
  <h1>Count: {{ initialState.count }}</h1>
  <button @click="initialState.count++">Increment</button>
  <button @click="initialState.count--">Decrement</button>
</template> -->
<!-- ------------------------------- -->

<!-- ------------------------------- -->
<!-- Example 2 -->

<script setup>
import { reactive } from 'vue'
let initialState = reactive({ val: { count: 0 }, user: ['HuXn', 'Jordan'] })

const changeUsers = () => {
  initialState.user[0] = 'michel'
  initialState.user[1] = 'philip'
}
</script>

<template>
  <h1>Current Count: {{ initialState.val.count }}</h1>
  <h2>Users: {{ initialState.user }}</h2>

  <button @click="initialState.val.count += 10">Add 10</button>
  <button @click="changeUsers">Change Uses</button>
  <button @click="initialState.user.push('John Doe')">Add One More User</button>
</template>
<!-- ------------------------------- -->
