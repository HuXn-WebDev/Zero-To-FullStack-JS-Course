<!-- ------------------------- -->
<!-- Example 1 -->
<!-- <script setup>
const isTrue = true
const isFalse = false
</script>

<template>
  <div>
    <p v-if="isTrue">This will show if isTrue is true.</p>
    <p v-else-if="isFalse">This will show if isFalse is true.</p>
    <p v-else>This will show if neither isTrue nor isFalse is true.</p>
  </div>
</template> -->
<!-- ------------------------- -->

<!-- ------------------------- -->
<!-- Example 2 -->
<!-- <script setup>
import { ref } from 'vue'
let isVisible = ref(true)
</script>

<template>
  <p v-show="isVisible">This paragraph will be shown or hidden based on the value of isVisible.</p>
  <button @click="isVisible = !isVisible">Toggle Visibility</button>
</template> -->
<!-- ------------------------- -->

<!-- ------------------------- -->
<!-- Example 3 -->
<!-- <script setup>
import { ref } from 'vue'
let isUserLoggedIn = ref(true)
let username = 'HuXn'
let showDetails = ref(isUserLoggedIn)
</script>

<template>
  <div>
    <h1 v-if="isUserLoggedIn">Welcome, {{ username }}!</h1>
    <p v-else>Please log in to access this content.</p>

    <div v-show="showDetails">
      <h4>You're now abel to modify your dashboard</h4>
    </div>
  </div>
</template> -->
<!-- ------------------------- -->

<!-- ------------------------- -->
<!-- Example 4 -->
<!-- <script setup>
import { ref } from 'vue'
let count = ref(0)
</script>

<template>
  <div>
    <h1 v-if="count < 5">Count: {{ count }}</h1>
    <p>Counter will disappear when count hit 5</p>
    <button @click="count++">+</button>
    <button @click="count--">-</button>
  </div>
</template> -->
<!-- ------------------------- -->

<!-- ------------------------- -->
<!-- Example 5 -->
<!-- <script setup>
import { ref } from 'vue'
const isActive = ref(true)
</script>

<template>
  <div v-if="isActive">
    <h1>My Blog Post</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aperiam officiis iste
      omnis libero perferendis ab cum ipsum quisquam quas saepe maxime numquam expedita, soluta
      doloribus excepturi unde. Architecto, odio?
    </p>
  </div>

  <button @click="isActive = !isActive">Toggle Post</button>
</template> -->
<!-- ------------------------- -->

<!-- ------------------------- -->
<!-- Example 6 -->
<script setup>
import { ref } from 'vue'
let password = ref('mypersonalpassword')
// let password = ref('aaa')
// let password = ref(null)
</script>

<template>
  <h1 v-if="password.length > 8">Strong Password</h1>
  <h1 v-else-if="password.length < 8">Weak Password</h1>
  <h1 v-else>Please Enter Your Password</h1>
</template>
<!-- ------------------------- -->
