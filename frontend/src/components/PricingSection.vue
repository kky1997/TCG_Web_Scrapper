<template>
    <section id="pricing" class="pricing-section py-5 border-top bg-white">
      <div class="container-xl">
        <h2 class="text-center fw-bold mb-5 fs-1">Pricing</h2>
  
        <div class="table-responsive">
          <table class="table text-center align-middle border shadow-sm pricing-table">
            <thead>
              <tr>
                <th class="feature-header fs-6 text-start text-muted">FEATURES</th>
  
                <!-- Plan Columns -->
                <th class="plan-header">
                  <div class="plan-wrapper">
                    <div class="fw-bold fs-6">FREE</div>
                    <div class="fs-3 fw-bold">$0</div>
                    <button class="btn btn-primary btn-sm mt-2">Sign Up</button>
                    <div style="height: 1.5rem;"></div>
                  </div>
                </th>
                <th class="plan-header">
                  <div class="plan-wrapper">
                    <div class="fw-bold fs-6">STANDARD</div>
                    <div class="fs-3 fw-bold">$5<small class="text-muted">/month</small></div>
                    <button class="btn btn-primary btn-sm mt-2">Buy It</button>
                    <div class="text-muted small mt-1">Try It</div>
                  </div>
                </th>
                <th class="plan-header">
                  <div class="plan-wrapper">
                    <div class="fw-bold fs-6">PREMIUM</div>
                    <div class="fs-3 fw-bold">$10<small class="text-muted">/month</small></div>
                    <button class="btn btn-primary btn-sm mt-2">Buy It</button>
                    <div style="height: 1.5rem;"></div>
                  </div>
                </th>
              </tr>
            </thead>
  
            <tbody>
              <tr>
                <th class="feature-label">Track Limit</th>
                <td>2 Products</td>
                <td>20 Products</td>
                <td>Unlimited</td>
              </tr>
              <tr>
                <th class="feature-label">Alert Filter Choices</th>
                <td>Restock</td>
                <td>All</td>
                <td>All</td>
              </tr>
              <tr>
                <th class="feature-label">Discord Integration</th>
                <td class="fs-4 text-danger">✘</td>
                <td class="fs-4 text-success">✔<br /><small class="fs-6">(1 Server)</small></td>
                <td class="fs-4 text-success">✔<br /><small class="fs-6">(3 Servers)</small></td>
              </tr>
              <tr>
                <th class="feature-label">
                  Monitor Protected Retailers<br />
                  <span class="text-muted small">e.g. Pokémon Centre</span>
                </th>
                <td>2 Products</td>
                <td>20 Products</td>
                <td>Unlimited</td>
              </tr>
              <tr>
                <th class="feature-label">
                  Future Monitor Speed Upgrades<br />
                  <span class="text-muted small">Increased Frequency</span>
                </th>
                <td class="fs-4 text-danger">✘</td>
                <td class="fs-4 text-danger">✘</td>
                <td class="text-muted">Coming Soon</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'PricingSection'
  }
  </script>
  
  <style scoped>
  /* General column layout */
  .pricing-table th,
  .pricing-table td {
    vertical-align: middle !important;
    padding: 0.75rem;
    font-size: 0.95rem;
    border: 1px solid #dee2e6;
    min-height: 80px;
  }
  
  /* Feature column */
  .feature-header {
    width: 400px;
    background-color: transparent !important;
    font-weight: bold;
  }
  
  .feature-label {
    text-align: left;
    font-weight: 600;
    font-size: 0.95rem;
    width: 160px;
    min-width: 160px;
  }
  
  /* Plan columns */
  .plan-header {
    min-width: 140px;
    max-width: 160px;
  }
  
  .plan-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
    min-height: 160px;
  }
  
  /* Smaller headings */
  .fs-6 {
    font-size: 0.95rem !important;
  }
  </style>
  