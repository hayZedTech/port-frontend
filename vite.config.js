// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          bootstrap: ["react-bootstrap"],
          motion: ["framer-motion"]
        }
      }
    },
    // Optional: raise warning limit if you still see chunk size warnings
    chunkSizeWarningLimit: 1000
  }
});
