<script setup>
import { ref } from 'vue'
const data = ref(null)

const fetchData = () => {
  // Make a GET request using fetch
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => {
      // Check if the response status is OK (200-299 range)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      // Parse the JSON response
      return response.json()
    })
    .then((responseData) => {
      // Handle the successful response
      data.value = responseData // Use data.value to update the ref value
    })
    .catch((error) => {
      // Handle errors
      console.error('Error fetching data:', error)
    })
}
</script>

<template>
  <div>
    <h1>(( Using Fetch ))</h1>
    <button @click="fetchData">Fetch Data</button>

    <div>
      <h2>Data from API:</h2>
      <pre>{{ data }}</pre>
    </div>
  </div>
</template>
