<template>
  <nav class="navbar navbar-expand-md navbar-light bg-white fixed-top shadow-sm border-bottom px-3 px-md-5">
    <!-- Logo -->
    <a class="navbar-brand d-flex align-items-center" href="#">
      <img src="https://via.placeholder.com/30" alt="Drop Radar Logo" width="30" height="30" class="me-2" />
      <strong>Drop Radar</strong>
    </a>

    <!-- Hamburger menu button (mobile) -->
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarContent"
      aria-controls="navbarContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Collapsible nav links -->
    <div class="collapse navbar-collapse justify-content-end" id="navbarContent">
      <ul class="nav align-items-center gap-3">
      <li class="nav-item"><a class="nav-link text-dark" href="#features">Features</a></li>
      <li class="nav-item"><a class="nav-link text-dark" href="#pricing">Pricing</a></li>
      <li class="nav-item"><a class="nav-link text-dark" href="#">Sign In</a></li>
      <li class="nav-item">
    <a href="#" class="btn btn-dark btn-sm rounded-pill px-3">Try for Free</a>
  </li>
</ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>
.navbar {
  z-index: 1030;
}
</style>
