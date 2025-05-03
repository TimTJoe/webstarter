import { defineConfig } from "vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  root: '.', 
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, "./src"),
      '@pages': path.resolve(__dirname, "./src/pages"),
      '@components': path.resolve(__dirname, "./src/components"),
      '@asserts': path.resolve(__dirname, "./src/asserts"),
      '@utils': path.resolve(__dirname, "./src/utils"),
      '@libs': path.resolve(__dirname, "./src/libs"),
      '@helpers': path.resolve(__dirname, "./src/helpers"),
      '@css': path.resolve(__dirname, "./src/css"),
      '@stores': path.resolve(__dirname, "./src/stores"),
      '@services': path.resolve(__dirname, "./src/services")
    }
  },
  server: {
    port: 8000,
    open: true,
    proxy: {
      '/api/v1': {
        target: "http://localhost:9000",
        changeOrigin: true,
        secure: false
      }
    }    
  },
});
