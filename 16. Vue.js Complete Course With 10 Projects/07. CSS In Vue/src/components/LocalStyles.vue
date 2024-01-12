<script></script>

<template>
  <div class="local">Second Component</div>
  <h1 class="still-global">Is it still global?</h1>
</template>

<style scoped>
.local {
  color: blueviolet;
}

/* The :global() pseudo selector allows us to use a certain class globally even in a scoped style. */
:global(.still-global) {
  color: aquamarine;
}
</style>
