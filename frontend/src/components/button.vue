<template>
    <button class="btn btn-success mt-3" @click="emitImage">
      Pay Jason Wongstein some money
      <slot />
    </button>
  </template>
  
  <script setup>
    const emit = defineEmits(['show-image']);

    function emitImage() {
        emit('show-image'); // Send event
    }
  </script>