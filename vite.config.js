import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import compression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: 'brotliCompress', // You can use 'gzip' or 'deflate' as well
      ext: '.br', // Use .gz for gzip
      deleteOriginalAssets: false // Keep the original files
    })
  ],
  build: {
    outDir: 'dist',
    // Ensure that Vite compresses large text assets
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        manualChunks (id) {
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        }
      }
    }
  }
})
