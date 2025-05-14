<template>
  <div class="container my-4">
    <div class="row align-items-end gy-2">
      <!-- Stat: Total Products Tracked -->
      <div class="col-12 col-md-auto">
        <div class="border rounded p-3 text-center">
          <small>Total Products Tracked</small>
          <h5 class="mb-0">{{ totalTracked }}</h5>
        </div>
      </div>

      <!-- Stat: Item Capacity -->
      <div class="col-12 col-md-auto">
        <div class="border rounded p-3 text-center">
          <small>Item Capacity</small>
          <h5 class="mb-0">{{ totalTracked }}/{{ capacity }}</h5>
        </div>
      </div>

      <!-- Search Field -->
      <div class="col-12 col-md">
        <input
          type="text"
          class="form-control"
          placeholder="Search and track a product..."
          v-model="searchQuery"
          @keyup.enter="searchAndAdd"
        />
      </div>

      <!-- Add Tracker Button -->
      <div class="col-12 col-md-auto">
        <button class="btn btn-dark w-100" @click="emitAddTracker">
          Add Tracker
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DashboardTop',
    props: {
      totalTracked: Number,
      capacity: Number
    },
    data() {
      return {
        searchQuery: ''
      };
    },
    methods: {
      emitAddTracker() {
        this.$emit('add-tracker');
      },
      searchAndAdd() {
        if (this.searchQuery.trim()) {
          this.$emit('search-item', this.searchQuery.trim());
          this.searchQuery = '';
        }
      }
    }
  };
</script>
