<template>
    <div class="d-flex justify-content-center align-items-center min-vh-100 bg-light px-3">
      <div class="bg-white p-4 p-md-5 rounded shadow-sm" style="max-width: 420px; width: 100%;">
        <h2 class="text-center mb-4">Create Account</h2>
  
        <!-- Email -->
        <div class="form-group mb-3">
          <input
            v-model="email"
            type="email"
            class="form-control"
            :class="{ 'is-invalid': emailTouched && !/\S+@\S+\.\S+/.test(email) }"
            placeholder="Email"
            @blur="emailTouched = true"
          />
        </div>
  
        <!-- Username -->
        <div class="form-group mb-3">
          <input
            v-model="username"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': usernameTouched && username.length <= 0 }"
            placeholder="Username"
            @blur="usernameTouched = true"
          />
        </div>
  
        <!-- Password -->
        <div class="form-group mb-4 position-relative">
          <input
            v-model="password"
            type="password"
            class="form-control"
            :class="{ 'is-invalid': passwordTouched && password.length <= 0 }"
            placeholder="Password"
            @focus="showTooltip = true"
            @blur="() => { showTooltip = false; passwordTouched = true }"
          />
          <div
            v-if="showTooltip"
            class="position-absolute bg-white border rounded p-2 small"
            style="top: 110%; left: 0; z-index: 1000;"
          >
            <strong>Password must contain:</strong><br />
            - 6+ characters<br />
            - 1 capital letter<br />
            - 1 number or special character
          </div>
        </div>
  
        <!-- Submit button, disabled unless formValid (computed) is true-->
        <button
          class="btn btn-primary w-100 mb-3 create-btn"
          :disabled="!formValid"
          @click="submitForm"
          >
          Sign Up
        </button>

        <h6 class="text-center mb-1">Or sign up with</h6>

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

        <!-- Sign In link -->
        <p class="text-center small mt-2">
          Already have an account?
          <router-link to="/signin">Sign in</router-link>
        </p>
      </div>
    </div>
  </template>
  
  <script>
  // Export for router
  export default {
    name: 'SignUpPage',
    data() {
      return {
        email: '',
        username: '',
        password: '',
        emailTouched: false,
        usernameTouched: false,
        passwordTouched: false,
        showTooltip: false
      };
    },
    computed: {
      isValidPassword() {
        return (
          this.password.length >= 6 &&
          /[A-Z]/.test(this.password) &&
          /[\d\W]/.test(this.password)
        );
      },
      formValid() {
        return (
          /\S+@\S+\.\S+/.test(this.email) &&
          this.username.length >= 3 &&
          this.isValidPassword
        );
      }
    },
    methods: {
      submitForm() {
        if (this.formValid) {
          this.$router.push('/auth-pending'); // automatically inject vue router and call this.$router
        }
      }
    }
  };
  </script>
  
  <!-- Scoped to this current view/component-->
  <style scoped>
    .is-invalid {
      border-color: #dc3545;
    }

    .w-48 {
      width: 48%;
    }
    
    /* Make sure to target .btn too */
    .create-btn {
    transition: background-color 0.2s ease, transform 0.2s ease;
    }

    .create-btn:hover:not(:disabled) {
      background-color: #0a58ca !important;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      cursor: pointer;
    }
  </style>
  
  