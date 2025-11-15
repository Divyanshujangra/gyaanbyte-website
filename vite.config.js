import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // Build optimizations
  build: {
    // Output directory
    outDir: 'dist',

    // Minification (using esbuild for better performance)
    minify: 'esbuild',

    // Chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['react-helmet-async', 'prop-types'],
        },
        // Asset file naming
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          } else if (/woff2?|ttf|otf|eot/i.test(ext)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },

    // Source maps (disable in production for security)
    sourcemap: false,

    // Chunk size warning limit (500kb)
    chunkSizeWarningLimit: 500,

    // Enable CSS code splitting
    cssCodeSplit: true,
  },

  // Server configuration for development
  server: {
    port: 3000,
    strictPort: false,
    open: false,
  },

  // Preview server configuration
  preview: {
    port: 4173,
    strictPort: false,
  },
})
