import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  //Added These Lines for client side routing
  server: {
    historyApiFallback: true,
  },
})
