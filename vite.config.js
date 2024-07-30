import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import compression from 'vite-plugin-compression'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
      deleteOriginalAssets: false
    }),
    visualizer({
      filename: './dist/bundle-stats.html',
      open: true
    })
  ],
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        manualChunks: {
          tailwind: ['@material-tailwind/react'],
          pannellum: ['pannellum'],
          react: ['react', 'react-dom']
        }
      }
    }
  }
})
