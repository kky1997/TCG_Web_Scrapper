<template>
  <div class="card h-100 shadow-sm">
    <div class="card-body d-flex flex-column align-items-start">
      <!-- Badge -->
      <span class="badge bg-success mb-2">Tracking</span>

      <!-- Product Image -->
      <div class="w-100 mb-3 d-flex justify-content-center">
        <img :src="imageUrl" alt="Product Image" class="img-fluid" style="max-height: 150px;" />
      </div>

      <!-- Product Name -->
      <h5 class="card-title w-100 text-truncate">{{ productName }}</h5>

      <!-- Alert Types -->
      <div class="mb-2 d-flex flex-wrap gap-2">
        <button
          v-for="type in alertTypes"
          :key="type"
          class="btn btn-sm btn-outline-dark rounded-pill"
        >
          {{ type }}
        </button>
      </div>

      <!-- Last Updated + Status -->
      <small class="text-muted mb-2">Last updated: {{ lastUpdated }}</small>

      <!-- Actions -->
      <div class="d-flex justify-content-between align-items-center w-100 mt-auto">
        <button class="btn btn-dark btn-sm">Add Alerts</button>
        <div class="dropdown">
          <button
            class="btn btn-sm btn-outline-secondary dropdown-toggle"
            type="button"
            id="settingsMenu"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            
          </button>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="settingsMenu">
            <li><a class="dropdown-item" href="#">Edit</a></li>
            <li><a class="dropdown-item text-danger" href="#">Remove</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
  export default {
    name: 'TrackerCard',
    props: {
      productName: String,
      imageUrl: String,
      alertTypes: {
        type: Array,
        default: () => []
      },
      lastUpdated: String,
      status: String
    }
  }
</script>
  
<style scoped>
  .card-title {
    font-size: 1rem;
    font-weight: 600;
  }
</style>
  