<template>
  <div id="app" class="min-vh-100 d-flex flex-column">
    <Navbar />
    <main class="flex-grow-1">
      <router-view /> <!-- This now loads HomePage, SignInPage, etc. -->
    </main>
    <footer class="bg-light text-center py-3 mt-auto border-top">
      <small>&copy; 2025 Drop Radar. All rights reserved.</small>
    </footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>
