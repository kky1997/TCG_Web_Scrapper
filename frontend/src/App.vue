<template>
  <div class="text-white d-flex align-items-center justify-content-center flex-column" 
       style="height: 100vh;" 
       v-if="!showImage">
    <h1 class="fw-bold text-danger">I'm Chinese</h1>
    <Button type="default" @show-image="showImage=true" /> <!-- when we get show-image event, set showImage to true-->
    <Button type="susphoto" label="something susipicous"/> <!-- label passed to app.vue for dynamic botton naming-->
    <RequestButton></RequestButton>
  </div>
  
  <div class="fullscreen-image" v-else @click="showImage = false"></div>
</template>

<script setup>
import { ref } from 'vue'; // Vue composition API
import Button from './components/button.vue';
import RequestButton from './components/RequestButton.vue';

const showImage = ref(false); // set showImage to false
</script>

<style scoped>
.fullscreen-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url('@/assets/maxresdefault.jpg');
  background-size: cover;
  background-position: center;
  z-index: 9999;
}
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
