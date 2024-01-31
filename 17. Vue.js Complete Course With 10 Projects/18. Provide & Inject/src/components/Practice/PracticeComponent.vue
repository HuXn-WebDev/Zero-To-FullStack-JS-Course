<script setup>
import { inject } from 'vue'
const friendsList = inject('friends')
const games = inject('games')
const moreGames = inject('moreGames')
</script>

<template>
  <h4>Injecting Arrays 👇</h4>
  <ul v-for="(friend, index) in friendsList" :key="index">
    <li>{{ friend }}</li>
  </ul>

  <hr />

  <h4>Injecting Objects 👇</h4>
  <ul v-for="(game, i) in games" :key="i">
    <li>{{ game }}</li>
  </ul>

  <hr />

  <h4>Injecting Array Of Objects 👇</h4>
  <ul v-for="(mg, i) in moreGames" :key="i">
    <li>{{ mg }}</li>
  </ul>

  <hr />

  <h4>Object Destructuring 👇</h4>
  <ul v-for="({ title, genre, platform, releaseDate }, i) in moreGames" :key="i">
    <li>{{ title }}</li>
    <li>{{ genre }}</li>
    <li>{{ platform }}</li>
    <li>{{ releaseDate }}</li>
  </ul>
</template>
