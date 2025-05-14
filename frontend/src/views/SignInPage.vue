<template>
    <div>
      <Navbar />
  
      <div class="container d-flex justify-content-center align-items-center" style="min-height: 100vh;">
        <div class="card p-4 shadow-sm" style="width: 100%; max-width: 400px;">
          <h2 class="text-center mb-4">Sign In</h2>
          
          <!--Bind event handler, .prevent to stop  browser reload-->
          <form @submit.prevent="handleSubmit">
            <!-- Username/Email (is-invalid is bootstrap css class)-->
            <div class="form-group mb-3 position-relative">
              <input
                type="text"
                class="form-control"
                placeholder="Username / Email"
                v-model="username"
                :class="{ 'is-invalid': showError && !username }"
              />
              <div v-if="showError && !username" class="invalid-feedback">Required field</div>
            </div>
  
            <!-- Password (is-invalid is bootstrap css class)-->
            <div class="form-group mb-3 position-relative">
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                v-model="password"
                :class="{ 'is-invalid': showError && !password }"
              />
              <div v-if="showError && !password" class="invalid-feedback">Required field</div>
            </div>
  
            <!-- Sign In Button -->
            <button class="btn btn-primary w-100 mb-2">Sign In</button>
            
            <div class="text-end mb-3">
              <a href="#" class="small">Forgot password?</a>
            </div>
  
            <!-- OAuth Buttons -->
            <div class="row g-2 mb-3">
              <div class="col-12 col-md-6">
                <button class="btn btn-light border w-100 d-flex align-items-center justify-content-center gap-2">
                  <img src="/google-icon.svg" alt="Google" height="20" />
                  <span>Google</span>
                </button>
              </div>
              <div class="col-12 col-md-6">
                <button class="btn btn-light border w-100 d-flex align-items-center justify-content-center gap-2">
                  <img src="/apple-icon.svg" alt="Apple" height="20" />
                  <span> Apple</span>
                </button>
              </div>
            </div>
  
            <!-- Link to Sign Up -->
            <p class="text-center small">
              Don’t have an account yet?
              <a href="/signup">Sign up</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Navbar from '@/components/Navbar.vue'
  
  // Export view for router
  export default {
    name: 'SignInPage',
    components: { Navbar },
    data() {
      return {
        username: '',
        password: '',
        showError: false
      }
    },
    methods: {
      // Event handler for form submission
      handleSubmit() {
        if(!this.username || !this.password) {
          this.showError = true  
        }
        else {
          // Send to backend or redirect
          console.log('Submit credentials:', this.username)
        }
      }
    }
  }
  </script>
  
  <!-- Scoped style for just signInPage view-->
  <style scoped>
  .is-invalid {
    border-color: #dc3545;
    padding-right: 2.25rem;
    background-image: url("data:image/svg+xml,%3Csvg fill='red' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.938 2.016a.13.13 0 0 1 .124 0c.453.26.75.731.75 1.234V6c0 .276.224.5.5.5s.5-.224.5-.5V3.25a2.002 2.002 0 0 0-1.06-1.75.13.13 0 0 1-.125 0 .13.13 0 0 1-.125 0A2.002 2.002 0 0 0 7.188 3.25V6c0 .276.224.5.5.5s.5-.224.5-.5V3.25c0-.503.297-.974.75-1.234z'/%3E%3Ccircle cx='8' cy='12' r='1'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
    background-size: 1rem;
  }
  </style>
  