<script setup>
import { ref } from 'vue'

const steps = ref(['Step 1', 'Step 2', 'Step 3'])
const currentStep = ref(0)

const nextStep = () => {
  if (currentStep.value < steps.value.length - 1) {
    currentStep.value++
  }
}

const prevStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--
  }
}
</script>

<template>
  <div class="progress-container">
    <div class="progress-bar">
      <div
        v-for="(step, index) in steps"
        :key="index"
        :class="{ 'step-active': index === currentStep }"
      >
        {{ step }}
      </div>
    </div>
    <div class="controls">
      <button @click="prevStep" :disabled="currentStep === 0" class="btn">Previous</button>
      <button @click="nextStep" :disabled="currentStep === steps.length - 1" class="btn">
        Next
      </button>
    </div>
  </div>
</template>

<style scoped>
.progress-container {
  max-width: 400px;
  margin: 50px auto;
}

.progress-bar {
  display: flex;
  background-color: #eee;
  border-radius: 8px;
  overflow: hidden;
}

.progress-bar div {
  flex: 1;
  text-align: center;
  padding: 15px;
  color: #fff;
  position: relative;
  z-index: 1;
}

.progress-bar div:not(:last-child) {
  border-right: 2px solid #fff;
}

.step-active {
  background-color: #af514c; /* Green for active step */
}

.controls {
  margin-top: 20px;
  text-align: center;
}

.btn {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #673ab7; /* Purple for button */
  color: #fff;
  border: none;
  border-radius: 5px;
  margin: 0 5px;
}

.btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
