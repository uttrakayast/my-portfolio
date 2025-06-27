import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/my-portfolio/", 
  server: {
    host: true, // 👈 Important to allow access from other devices
    port: 5173,
  },
   
});

