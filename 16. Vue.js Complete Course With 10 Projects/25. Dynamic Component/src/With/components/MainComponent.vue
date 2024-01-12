<script setup>
import { ref } from 'vue'
import ComponentOne from './ComponentOne.vue'
import ComponentTwo from './ComponentTwo.vue'
import ComponentThree from './ComponentThree.vue'

const currentTab = ref('ComponentOne')

const tabs = {
  ComponentOne: ComponentOne,
  ComponentTwo: ComponentTwo,
  ComponentThree: ComponentThree
}
</script>

<template>
  <!-- With Dynamic Component -->
  <button @click="currentTab = 'ComponentOne'">What is HTML</button>
  <button @click="currentTab = 'ComponentTwo'">What is CSS</button>
  <button @click="currentTab = 'ComponentThree'">What is JS</button>

  <component :is="tabs[currentTab]" />
</template>
