import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/templates_webpages/',
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        parrilla: resolve(__dirname, 'parrilla/index.html'),
        hamburgueseria: resolve(__dirname, 'hamburgueseria/index.html'),
      }
    }
  }
})