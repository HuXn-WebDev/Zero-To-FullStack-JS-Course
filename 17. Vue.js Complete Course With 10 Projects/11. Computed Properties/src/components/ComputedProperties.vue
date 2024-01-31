<!-- ------------------------- -->
<!-- Example 1 -->
<!-- <script setup>
import { ref, computed } from 'vue'

const number = ref(5)

const squaredNumber = computed(() => {
  return number.value * number.value
})
</script>

<template>
  <h1>Original number: {{ number }}</h1>
  <h1>Squared number: {{ squaredNumber }}</h1>
</template> -->
<!-- ------------------------- -->

<!-- ------------------------- -->
<!-- Example 2 -->
<!-- <script setup>
import { computed, ref } from 'vue'

const firstName = ref('HuXn')
const lastName = ref('WebDev')

const fullName = computed(() => firstName.value + ' ' + lastName.value)
</script>

<template>
  <h1>Full Name: {{ fullName }}</h1>
</template> -->
<!-- ------------------------- -->

<!-- ------------------------- -->
<!-- Example 3 -->
<script setup>
import { ref, computed } from 'vue'
const counter = ref(0)

const squaredCounter = computed(() => counter.value ** 2)

const incrementCounter = () => {
  counter.value++
}
</script>

<template>
  <p>Counter: {{ counter }}</p>
  <p>Squared Counter: {{ squaredCounter }}</p>
  <button @click="incrementCounter">Increment Counter</button>
</template>
<!-- ------------------------- -->
