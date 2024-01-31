<script setup>
import { ref } from "vue";

const username = ref("");
const userProfile = ref(null);
const error = ref(null);

const getUserProfile = async () => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username.value}`
    );
    const data = await response.json();

    if (response.ok) {
      userProfile.value = data;
      error.value = null;
    } else {
      userProfile.value = null;
      error.value = `Error: ${data.message}`;
    }
  } catch (err) {
    console.error("Error fetching data:", err);
    error.value = "An error occurred while fetching data.";
  }
};
</script>

<template>
  <div class="github-profile-viewer">
    <h1 class="app-title">GitHub User Profile Viewer</h1>

    <div class="input-container">
      <input
        v-model="username"
        placeholder="Enter GitHub username"
        @input="getUserProfile"
      />
    </div>

    <div v-if="userProfile" class="user-profile">
      <img :src="userProfile.avatar_url" :alt="userProfile.login" />

      <div class="user-details">
        <p><strong>Name:</strong> {{ userProfile.login }}</p>
        <p><strong>Location:</strong> {{ userProfile.location }}</p>
        <p><strong>Followers:</strong> {{ userProfile.followers }}</p>
        <p><strong>Following:</strong> {{ userProfile.following }}</p>
        <p><strong>Public Repos:</strong> {{ userProfile.public_repos }}</p>
      </div>
    </div>

    <div v-if="error" class="error-message">
      <p>{{ error }}</p>
    </div>
  </div>
</template>

<style scoped>
.github-profile-viewer {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.app-title {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.input-container {
  margin-bottom: 20px;
}

input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
}

.user-profile {
  margin-top: 20px;
}

h2 {
  font-size: 20px;
  margin-bottom: 10px;
  color: #333;
}

img {
  width: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
}

.user-details {
  text-align: left;
}

p {
  font-size: 16px;
  margin-bottom: 10px;
}

.error-message {
  color: #e74c3c;
  margin-top: 20px;
}
</style>
