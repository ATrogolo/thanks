import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/thanks/", // For GitHub Pages deployment
  server: {
    port: 3000,
    open: true,
  },
  css: {
    devSourcemap: true, // CSS sourcemaps only in development
  },
  build: {
    outDir: "build",
    sourcemap: false, // No sourcemaps in production builds
  },
})
