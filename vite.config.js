import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, ".")
    }
  },

  server: {
    port: 5173, // frontend port
    strictPort: true,
    hmr: {
      port: 24679 // 🔥 FIX WebSocket conflict
    }
  },

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          motion: ["motion/react"],
          icons: ["lucide-react"]
        }
      }
    }
  }
});