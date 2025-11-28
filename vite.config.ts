import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const isCloudflare = process.env.CF_PAGES === '1';

export default defineConfig({
  plugins: isCloudflare 
    ? [react()]
    : [react()],

  server: {
    allowedHosts: true,
  },

  build: {
    chunkSizeWarningLimit: 5000,
    outDir: 'dist',
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  
  base: './',
});