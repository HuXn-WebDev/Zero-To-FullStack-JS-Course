<script setup>
import SlotComponent from "./components/SlotComponent.vue";
import FallbackContent from "./components/FallbackContent.vue";
import NamedSlot from "./components/NamedSlot.vue";
import DefaultSlot from "./components/DefaultSlot.vue";
</script>

<template>
  <SlotComponent>
    <h1>Content 1</h1>
    <h2>Content 2</h2>
  </SlotComponent>

  <hr />

  <!-- We didn't specify any content in this component -->
  <FallbackContent> </FallbackContent>
  <FallbackContent>
    <p>
      Fallback will not work because I'm providing content inside the component
    </p>
  </FallbackContent>

  <hr />

  <NamedSlot>
    <template v-slot:one>
      <h1>This content will go to slot "one"</h1>
    </template>

    <!-- Alternative way -->
    <template #two>
      <h1>This content will go to slot "two"</h1>
    </template>
  </NamedSlot>

  <hr />

  <DefaultSlot>
    <template #default>
      <h1>This is some random default content</h1>
    </template>
  </DefaultSlot>
</template>
