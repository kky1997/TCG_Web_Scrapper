<template>
    <section class="container my-4">
      <div class="row gy-3 align-items-center text-center text-md-start">
        <!-- Stat Cards -->
        <div class="col-12 col-md-6">
          <div class="card border-0 shadow-sm h-100">
            <div class="card-body">
              <h6 class="text-muted mb-1">Total Products Tracked</h6>
              <h4 class="mb-0">{{ totalTracked }}</h4>
            </div>
          </div>
        </div>
  
        <div class="col-12 col-md-6">
          <div class="card border-0 shadow-sm h-100">
            <div class="card-body">
              <h6 class="text-muted mb-1">Alert Capacity</h6>
              <h4 class="mb-0">
                {{ alertCount }}/{{ alertLimit }}
                <span v-if="showUpgradeNotice" class="badge bg-warning text-dark ms-2">Upgrade Soon</span>
              </h4>
            </div>
          </div>
        </div>
  
        <!-- Actions -->
        <div class="col-12 d-flex flex-column flex-md-row justify-content-center justify-content-md-start gap-3 mt-2">
          <button class="btn btn-outline-secondary w-100 w-md-auto">Browse All</button>
          <button class="btn btn-dark w-100 w-md-auto">Add Tracker</button>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'DashboardTop',
    props: {
      totalTracked: {
        type: Number,
        default: 0
      },
      alertCount: {
        type: Number,
        default: 0
      },
      alertLimit: {
        type: Number,
        default: 5
      }
    },
    computed: {
      showUpgradeNotice() {
        return this.alertCount / this.alertLimit >= 0.8;
      }
    }
  };
  </script>
  
  <style scoped>
  .card-body {
    padding: 1rem 1.25rem;
  }
  </style>
  