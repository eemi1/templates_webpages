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
        barberia: resolve(__dirname, 'barberia/index.html'),
        cafeteria: resolve(__dirname, 'cafeteria/index.html'),
        cafeteria_2: resolve(__dirname, 'cafeteria_2/index.html'),
        peluqueria: resolve(__dirname, 'peluqueria/index.html'),
        pizzeria: resolve(__dirname, 'pizzeria/index.html'),
      }
    }
  }
})