import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  server: {
    proxy: {
      '/atom-visualizer': {
        target: 'https://atom-visualizer.fly.dev',
        changeOrigin: true,
        secure: true,
      },
      '/unsure-calculator': {
        target: 'https://unsure-calculator.fly.dev',
        changeOrigin: true,
        secure: true,
      }
    }
  }
})
