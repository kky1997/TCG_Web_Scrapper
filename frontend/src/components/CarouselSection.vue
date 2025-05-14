<template>
    <section class="py-5 bg-white">
      <div class="container-xl">
        <!-- Add g-5 for spacing between columns -->
        <div class="row align-items-center g-5">
          <!-- Left: Text -->
          <div class="col-lg-6 text-left">
            <span
              class="badge rounded-pill text-uppercase mb-3 px-3 py-2"
              style="background-color: #f8d7da; color: #721c24;"
            >
              Real-Time Alerts
            </span>
            <h2 class="h1 fw-bold mb-3">
              You Pick the Products.<br />
              We Handle the Rest.
            </h2>
            <p class="lead text-muted mb-0">
              Get instant alerts for restocks and releases, no refresh spam, no missed drops.
            </p>
          </div>
  
          <!-- Right: Carousel -->
          <div class="col-lg-6 d-flex flex-column justify-content-start">
             <!-- Fade + AutoPlay via attributes -->
            <div
                id="productCarousel"
                class="carousel slide carousel-container w-100"
                data-bs-ride="carousel"
                data-bs-interval="4000">

            <!-- Slides -->
            <div class="carousel-inner">
              <div
                v-for="(src, index) in carouselImages"
                :key="index"
                :class="['carousel-item', { active: index === 0 }]"
              >
                <div class="image-wrapper">
                  <img :src="src" class="carousel-image" :alt="`Product ${index + 1}`" />
                </div>
              </div>
            </div>

            <!-- Controls -->
            <button
              class="carousel-control-prev carousel-nav"
              type="button"
              data-bs-target="#productCarousel"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next carousel-nav"
              type="button"
              data-bs-target="#productCarousel"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>

            <!-- Indicators outside .carousel-inner but within .carousel-container -->
            <ol class="carousel-indicators absolute-indicators">
              <li
                v-for="(src, i) in carouselImages"
                :key="i"
                :data-bs-target="'#productCarousel'"
                :data-bs-slide-to="i"
                :class="{ active: i === 0 }"
              ></li>
            </ol>

            <!-- Caption below indicators -->
            <p class="text-muted small text-center mt-1">Now Tracking these Hot releases!</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  
<script>
  import img from '@/assets/prismatic etb NB.png'
  
  export default {
    name: "CarouselSection",
    data() {
      return {
        carouselImages: [img, img, img]
      }
    }
  }
</script>


<style scoped>
  .container-xl {
    max-width: 1600px;
    margin: 0 auto;
    padding: 0 -1rem;
  }
  
  .image-wrapper {
    height: clamp(500px, 60vw, 650px);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  
  .carousel-image {
    max-height: 250%;
    max-width: 250%;
    object-fit: contain;
  }
  
  /* Arrows */
  .carousel-container {
    position: relative;
  }
  
  .carousel-container:hover .carousel-nav {
    opacity: 1;
  }
  
  .carousel-nav {
    opacity: 0;
    transition: opacity 0.3s ease;
    width: 3rem;
    height: 3rem;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
  }

  .carousel-nav:focus {
    outline: none;
    box-shadow: none;
    opacity: 0; /* fade out again if focused */
}
  
  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    filter: brightness(0) invert(1);
  }
  
  /* Optional: style the indicators (dots) if needed */
  .absolute-indicators {
  position: absolute;
  bottom: 3rem; /* distance from bottom of carousel image */
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  }
  /* Carousel Indicator Styling */
  .carousel-indicators li {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #333;
    margin: 0 4px;
  }
  /* Carousel indicator hover Colour change */
  .carousel-indicators .active {
    background-color: #000;
  }
</style>

  