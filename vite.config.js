import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/T.F.R/', // <-- ESTA ES LA LÍNEA QUE DEBES AGREGAR
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})