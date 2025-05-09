<template>
    <div class="row">
      <div
        v-for="(item, index) in normalizedItems"
        :key="index"
        class="col-md-4 mb-4"
      >
        <TrackerCard v-if="item" v-bind="item" />
        <div v-else class="border rounded p-5 text-muted text-center">
          Empty Slot
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import TrackerCard from './TrackerCard.vue'
  
  export default {
    name: 'TrackedItems',
    components: {
      TrackerCard
    },
    props: {
      trackedItems: {
        type: Array,
        default: () => []
      }
    },
    computed: {
      normalizedItems() {
        const filled = [...this.trackedItems]
        while (filled.length < 3) {
          filled.push(null) // show empty slots
        }
        return filled
      }
    }
  }
  </script>
  