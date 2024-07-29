import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import compression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: 'brotliCompress', // Use 'gzip' or 'deflate' if preferred
      ext: '.br', // For Brotli compression, use .gz for gzip
      deleteOriginalAssets: false // Keep the original files
    })
  ],
  build: {
    outDir: 'dist',
    // Ensure that Vite compresses large text assets
    assetsInlineLimit: 0, // Inline everything (default is 4096 bytes)
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
