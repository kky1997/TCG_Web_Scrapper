<template>
  <div class="text-white d-flex align-items-center justify-content-center flex-column" style="height: 100vh;">
    <h1 class="fw-bold text-danger">I'm Chinese</h1>
    <button class="btn btn-success mt-3">Pay Jason Wongstein some money</button>
  </div>
</template>

<script setup>
import bg from '@/assets/background.jpg'
</script>

<style scoped>
/* nothing here */
</style>

<style>
/* Global background on body */
body {
  background-image: url('@/assets/background.jpg');
  background-repeat: repeat;
  background-size: 150px 150px;
  margin: 0; /* remove default margin */
  padding: 0;
}
</style>
