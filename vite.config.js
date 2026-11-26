/* global process */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { copyFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

// Copies index.html to 404.html after build so GitHub Pages can fall back
// if someone opens a path without a hash. HashRouter is the primary strategy.
function spaFallback() {
  return {
    name: 'spa-github-pages-fallback',
    closeBundle() {
      const index = resolve('dist/index.html')
      if (existsSync(index)) {
        copyFileSync(index, resolve('dist/404.html'))
      }
    },
  }
}

// Default base matches a GitHub Pages project site at
// https://alexm415.github.io/RoofingKnights/
// Override with VITE_BASE (e.g. VITE_BASE=/ for a custom domain or local root).
export default defineConfig({
  base: process.env.VITE_BASE || '/RoofingKnights/',
  plugins: [react(), spaFallback()],
})
