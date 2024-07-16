<script setup>
import { ref } from 'vue'
import axios from 'axios'

const data = ref(null)

const fetchData = async () => {
  try {
    // Make a GET request using axios
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')

    // Handle the successful response
    data.value = response.data
  } catch (error) {
    // Handle errors
    console.error('Error fetching data:', error)
  }
}
</script>

<template>
  <div>
    <h1>(( Using Axios ))</h1>

    <button @click="fetchData">Fetch Data</button>

    <div>
      <h2>Data from API:</h2>
      <pre>{{ data }}</pre>
    </div>
  </div>
</template>
