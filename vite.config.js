import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',  // Adjust this if your project is hosted in a subdirectory
  plugins: [react()],
})
