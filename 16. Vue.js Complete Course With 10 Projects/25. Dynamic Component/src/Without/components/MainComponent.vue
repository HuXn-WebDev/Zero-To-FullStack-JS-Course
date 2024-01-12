<script setup>
import { ref } from 'vue'
import ComponentOne from './ComponentOne.vue'
import ComponentTwo from './ComponentTwo.vue'
import ComponentThree from './ComponentThree.vue'

const currentTab = ref('One')
</script>

<template>
  <!-- Without Dynamic Components -->
  <button @click="currentTab = 'One'">One</button>
  <button @click="currentTab = 'Two'">Two</button>
  <button @click="currentTab = 'Three'">Three</button>

  <ComponentOne v-if="currentTab === 'One'" />
  <ComponentTwo v-if="currentTab === 'Two'" />
  <ComponentThree v-if="currentTab === 'Three'" />
</template>
