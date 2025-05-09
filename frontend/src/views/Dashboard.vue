<template>
    <div class="container py-4">
      <DashboardTop />
      <TrackedItems :trackedItems="mockItems" />
      <ActivityLog :logs="activityLogs" />
    </div>
  </template>
  
  <script>
  import DashboardTop from '../components/DashboardTop.vue'
  import TrackedItems from '../components/TrackedItems.vue'
  import ActivityLog from '../components/ActivityLog.vue'
  
  export default {
    name: 'Dashboard',
    components: {
      DashboardTop,
      TrackedItems,
      ActivityLog
    },
    data() {
      return {
        mockItems: [
          {
            productName: 'Shiny Charizard Booster',
            imageUrl: '',
            alertTypes: ['RS', 'NL', 'PC'],
            lastUpdated: '2h ago',
            status: 'tracking'
          }
        ],
        activityLogs: [
          { item: 'Shiny Charizard Booster', event: 'Restocked at PC', time: '2h ago' },
          { item: 'Elite Trainer Box', event: 'Price dropped to $74', time: '5h ago' },
          { item: 'Pokéball Tin', event: 'Added to your tracked items', time: '1 day ago' }
        ]
      }
    }
  }
  </script>
  