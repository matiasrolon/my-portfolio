import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Ruta relativa: funciona tanto en GitHub Pages (usuario.github.io/repo/)
  // como en la raíz de un dominio propio, sin tener que tocar nada.
  base: './',
  plugins: [react()],
})
