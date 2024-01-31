<script setup>
import { ref } from 'vue'

const firstName = ref('alex')
const lastName = ref('merson')

const myFavNumber = 7

// Importing Components
import StaticPropsComponent from './components/StaticPropsComponent.vue'
import DynamicPropsComponent from './components/DynamicPropsComponent.vue'
import ChangingPropsValues from './components/ChangingPropsValue.vue'
import PropValidation from './components/PropValidation.vue'
import ComplexProps from './components/ComplexProps.vue'
import CustomValidator from './components/CustomValidator.vue'
</script>

<template>
  <StaticPropsComponent name="jordan" />
  <DynamicPropsComponent :firstName="firstName" :lastName="lastName" />
  <ChangingPropsValues :myFavNumber="myFavNumber" />
  <PropValidation fullName="jordan" :age="20" />
  <ComplexProps
    :friends="['alex', 'john', 'jordan', 'huxn']"
    :userInfo="{ name: 'alex', age: 20, location: ['Earth', 'IDK'] }"
  />

  <CustomValidator name="HuXn" :age="20" password="impossiblePassword" />
</template>
