<!-- src/views/HomePage.vue -->
<template>
    <div>
      <CarouselSection />
      <FeaturesSection />
      <PricingSection />
    </div>
  </template>
  
  <script>
  import CarouselSection from '@/components/CarouselSection.vue'
  import FeaturesSection from '@/components/FeaturesSection.vue'
  import PricingSection from '@/components/PricingSection.vue'
  
  export default {
    name: 'HomePage',
    components: {
      CarouselSection,
      FeaturesSection,
      PricingSection
    }
  }
  </script>
  