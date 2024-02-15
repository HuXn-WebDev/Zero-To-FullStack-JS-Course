<template>
  <!-- <h1 v-bind:class="$style['m-class']">Using Module CSS with $ syntax (kabak-case)</h1> -->
  <!-- <h1 :class="$style.anotherClass">Using Module CSS with $ syntax (camelCase)</h1> -->
  <h1 :class="myClasses.anotherClass">Using Customized Modules</h1>
</template>

<style module>
/* kabab-case */
/* .m-class {
  background: firebrick;
  color: white;
} */

/* camelCase */
/* .anotherClass {
  background: seagreen;
  color: white;
} */
</style>

<!-- Customizing Modules -->
<style module="myClasses">
.anotherClass {
  background: seagreen;
  color: white;
}
</style>
