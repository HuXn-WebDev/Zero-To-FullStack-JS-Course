<script setup>
// import ComponentEventVue from './components/ComponentEvent.vue'
import EventValidation from "./components/EventValidation.vue";

// import { ref } from 'vue'

// let count = ref(0)
// const increment = () => count.value++

// Creating Methods
const emit = defineEmits({
  userInfo: ({ username, email, password }) => {
    if (!username) {
      console.log("Please enter your name");
      return false;
    }
    if (!email) {
      console.log("Please enter your email");
      return false;
    }
    if (!password) {
      console.log("Please enter your password");
      return false;
    } else {
      return true;
    }
  },
});

const formHandler = (username, email, password) => {
  emit("userInfo", { username, email, password });
  console.log("username: ", username);
  console.log("email: ", email);
  console.log("password: ", password);
};
</script>

<template>
  <!-- <h1>Count: {{ count }}</h1> -->
  <!-- <ComponentEventVue @incrementCount="count++" /> -->
  <!-- <ComponentEventVue @incrementCount="increment" /> -->
  <EventValidation @userInfo="formHandler" />
</template>
