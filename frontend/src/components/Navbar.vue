<template>
  <nav class="navbar navbar-expand-md navbar-light bg-white fixed-top shadow-sm border-bottom px-3 px-md-5">
    <!-- Logo/Home link -->
    <router-link class="navbar-brand d-flex align-items-center" to="/">
      <img src="https://via.placeholder.com/30" alt="Drop Radar Logo" width="30" height="30" class="me-2" />
      <strong>Drop Radar</strong>
    </router-link>

    <!-- Hamburger menu button (only shown if not on auth pages) -->
    <button
      v-if="!isAuthPage"
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarContent"
      aria-controls="navbarContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Collapsible nav links (hidden on auth pages) -->
    <div v-if="!isAuthPage" class="collapse navbar-collapse justify-content-end" id="navbarContent">
      <ul class="nav align-items-center gap-3">
        <li class="nav-item">
          <a class="nav-link text-dark" href="#features">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#pricing">Pricing</a>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-dark" to="/signin">Sign In</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/signup" class="btn btn-dark btn-sm rounded-pill px-3">Try for Free</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'Navbar',
  setup() {
    const route = useRoute();

    const isAuthPage = computed(() =>
      ['/signin', '/signup'].includes(route.path)
    );

    return { isAuthPage };
  },
};
</script>

<style scoped>
.navbar {
  z-index: 1030;
}
</style>
