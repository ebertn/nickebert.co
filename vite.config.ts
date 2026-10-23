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
        target: 'https://nickebert.co',
        changeOrigin: true,
        secure: true,
      },
      '/unsure-calculator': {
        target: 'https://nickebert.co',
        changeOrigin: true,
        secure: true,
      }
    }
  }
})
