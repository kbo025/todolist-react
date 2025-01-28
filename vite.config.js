import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: "http://kbo025.github.io/todolist-react",
  server: {
    https: true,
  },
  build: {
    outDir: 'dist',
  },
  plugins: [
    tailwindcss(),
    react(),
  ],
})
