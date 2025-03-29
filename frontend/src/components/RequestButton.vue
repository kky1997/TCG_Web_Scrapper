<template>
    <button class="btn btn-success mt-3" @click="sendRequest">
      send a request
      <slot />
    </button>
  </template>
  
<script setup>
async function sendRequest() {
  try {
    const response = await fetch('http://localhost:3000/');
    const text = await response.text(); // or response.json() if you're expecting JSON
    alert(`Response from backend: ${text}`);
  } catch (err) {
    console.error('Error sending request:', err);
    alert('Request failed. Check console for details.');
  }
}
</script>