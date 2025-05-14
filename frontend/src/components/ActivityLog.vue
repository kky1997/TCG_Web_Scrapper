<!-- src/components/ActivityLog.vue -->
<template>
    <div class="mt-4">
      <h5 class="mb-3">Recent Activity</h5>
      <div class="table-responsive">
        <table class="table table-sm table-bordered align-middle">
          <thead class="table-light">
            <tr>
              <th>Item</th>
              <th>Event</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(log, index) in logs" :key="index">
              <td>{{ log.item }}</td>
              <td>{{ log.event }}</td>
              <td class="text-muted">{{ log.time }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ActivityLog',
    props: {
      logs: {
        type: Array,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .table {
    font-size: 0.9rem;
  }
  </style>
  