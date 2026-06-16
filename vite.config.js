import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
   resolve: {
    dedupe: ['react', 'react-dom']
  
}
,
server: {
    headers: {
      "Cross-Origin-Opener-Policy": "same-origin-allow-popups",

    },
    port: 5177,      // Set your favorite port here
    strictPort: true
  },

})
