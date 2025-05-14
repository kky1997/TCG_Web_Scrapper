<template>
  <section id="features" class="section-features py-5 border-top bg-light">
    <!-- Only this container remains centered -->
    <div class="container-xl">
      <div class="text-center mb-5">
        <h2 class="fw-bold">Why Drop Radar?</h2>
        <p class="text-muted mb-0">Track smarter, not harder. Here's what makes us different.</p>
      </div>

      <!-- Feature Cards -->
      <div class="row justify-content-center gx-4 gy-4">
        <div class="col-md-4" v-for="n in 3" :key="n">
          <div class="p-4 bg-white shadow-sm rounded text-center h-100">
            <h5 class="fw-bold">Feature {{ n }}</h5>
            <p class="text-muted">Brief description of the feature will go here.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  
<script>
  export default {
    name: 'FeaturesSection'
  }
</script>
  
<style scoped>
    body {
    margin: 0;
    overflow-x: hidden;
  }
</style>
  