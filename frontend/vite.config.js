import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // make sure this is imported

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // define @ as src/
    }
  },
  server: {
    watch: {
      usePolling: true
    }
  }
})