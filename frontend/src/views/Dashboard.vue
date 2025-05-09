<template>
    <div class="container py-4">
      <DashboardTop />
      <TrackedItems :trackedItems="mockItems" />
    </div>
  </template>
  
  <script>
  import DashboardTop from '../components/DashboardTop.vue'
  import TrackedItems from '../components/TrackedItems.vue'
  
  export default {
    name: 'Dashboard',
    components: {
      DashboardTop,
      TrackedItems
    },
    data() {
      return {
        mockItems: [
          {
            productName: 'Shiny Charizard Booster',
            imageUrl: '', // placeholder or real path
            alertTypes: ['RS', 'NL', 'PC'],
            lastUpdated: '2h ago',
            status: 'tracking'
          },
          // add more objects for mock cards
        ]
      }
    }
  }
  </script>
  