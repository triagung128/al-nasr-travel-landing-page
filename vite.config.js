import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: {
        quality: 80, // Kompresi kualitas untuk PNG
      },
      jpeg: {
        quality: 70, // Kualitas untuk JPEG
      },
      webp: {
        quality: 75, // Kualitas untuk WebP
      },
      svg: {
        multipass: true, // Optimasi SVG
      },
    }),
  ],
});
