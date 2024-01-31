<!-- ------------------------------ -->
<!-- Example 1 -->
<!-- <script setup>
import { ref } from 'vue'
let count = ref(0)
</script>

<template>
  <h1>Count: {{ count }}</h1>
  <button @click="count++">+</button>
  <button @click="count--">+</button>
</template> -->
<!-- ------------------------------ -->

<!-- ------------------------------ -->
<!-- Example 2 -->
<!-- <script setup>
import { ref } from 'vue'
let username = ref('')
</script>

<template>
  <h1>Username: {{ username }}</h1>
  <button @click="username = 'jordan'">Add User</button>
</template> -->
<!-- ------------------------------ -->

<!-- ------------------------------ -->
<!-- Example 3 -->
<!-- <script setup>
import { ref } from 'vue'
let usersList = ref(['Michel', 'John', 'HuXn', 'Jordan'])
</script>

<template>
  <h1>Users List: {{ usersList }}</h1>
  <button @click="usersList.push('John Doe')">Add User</button>
</template> -->
<!-- ------------------------------ -->

<!-- ------------------------------ -->
<!-- Example 4 -->
<!-- <script setup>
import { ref } from 'vue'
let userInfo = ref({ name: 'alex', age: 20, location: ['NYC', 'IDK'], isMarried: false })
</script>

<template>
  <h1>Name: {{ userInfo.name }}</h1>
  <h1>Age: {{ userInfo.age }}</h1>
  <h1>Location: {{ userInfo.location }}</h1>
  <h1>isMarried: {{ userInfo.isMarried }}</h1>

  <button @click="userInfo.name = 'huxn'">Change Name</button> <br />
  <button @click="userInfo.age = 40">Change Age</button> <br />
  <button @click="userInfo.location = ['Earth', 'IDK']">Change Location</button> <br />
  <button @click="userInfo.isMarried = true">Change isMarried</button> <br />
</template> -->
<!-- ------------------------------ -->

<!-- ------------------------------ -->
<!-- Example 5 -->
<script setup>
import { reactive, ref } from 'vue'
let friends = reactive([ref('Jordan'), ref('Alex'), ref('HuXn')])
</script>

<template>
  <h1>1. {{ friends[0] }}</h1>
  <h1>2. {{ friends[1] }}</h1>
  <h1>3. {{ friends[2] }}</h1>

  <button @click="friends[0] = '🤝'">Hand Shake</button>
  <button @click="friends[1] = '🤝'">Hand Shake</button>
  <button @click="friends[2] = '🤝'">Hand Shake</button>
</template>
<!-- ------------------------------ -->
