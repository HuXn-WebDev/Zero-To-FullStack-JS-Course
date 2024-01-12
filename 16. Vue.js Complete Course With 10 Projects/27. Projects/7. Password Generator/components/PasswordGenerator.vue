<script setup>
import { ref } from "vue";

const passwordLength = ref(12);
const includeUppercase = ref(true);
const includeNumbers = ref(true);
const includeSymbols = ref(true);
const generatedPassword = ref("");

const generatePassword = () => {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = includeUppercase.value
    ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    : "";
  const numberChars = includeNumbers.value ? "0123456789" : "";
  const symbolChars = includeSymbols.value ? "!@#$%^&*()_+[]{}|;:,.<>?/~`" : "";

  const allChars = lowercaseChars + uppercaseChars + numberChars + symbolChars;

  let password = "";
  for (let i = 0; i < passwordLength.value; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  generatedPassword.value = password;
};
</script>

<template>
  <div class="password-generator-container">
    <h2 class="password-generator-title">Password Generator</h2>
    <label for="length">Password Length:</label>
    <input
      type="number"
      id="length"
      v-model="passwordLength"
      min="4"
      max="32"
    />
    <br />
    <label for="includeUppercase">Include Uppercase:</label>
    <input type="checkbox" id="includeUppercase" v-model="includeUppercase" />
    <br />
    <label for="includeNumbers">Include Numbers:</label>
    <input type="checkbox" id="includeNumbers" v-model="includeNumbers" />
    <br />
    <label for="includeSymbols">Include Symbols:</label>
    <input type="checkbox" id="includeSymbols" v-model="includeSymbols" />
    <br />
    <button @click="generatePassword" class="generate-button">
      Generate Password
    </button>
    <div v-if="generatedPassword" class="generated-password">
      <strong>Your Password:</strong> {{ generatedPassword }}
    </div>
  </div>
</template>

<style scoped>
.password-generator-container {
  max-width: 400px;
  margin: 50px auto;
}

.password-generator-title {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
}

.generate-button {
  padding: 10px 15px;
  font-size: 16px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.generate-button:hover {
  background-color: #2980b9;
}

.generated-password {
  margin-top: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f9f9f9;
  color: #333;
}
</style>
