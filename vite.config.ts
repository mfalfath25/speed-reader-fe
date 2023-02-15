import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: 'Speed Reader',
        short_name: 'SR PWA',
        description: 'Speed Reader PWA',
        theme_color: '#ffffff',
        scope: '/',
        start_url: '/',
        display: 'standalone',
        icons: [
          {
            src: '/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,jpg,svg,webp}'],
      },
      includeAssets: ['src/assets/**/*'],
      registerType: 'autoUpdate',
      // devOptions: {
      //   enabled: true,
      //   navigateFallback: '/index.html',
      //   type: 'classic',
      // },
      // workbox: {
      //   globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      //   runtimeCaching: [
      //     {
      //       urlPattern: ({ url }) => {
      //         return url.pathname.startsWith('/api/')
      //       },
      //       handler: 'CacheFirst' as const,
      //       options: {
      //         cacheName: 'api-cache',
      //         cacheableResponse: {
      //           statuses: [0, 200],
      //         },
      //       },
      //     },
      //     {
      //       urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
      //       handler: 'CacheFirst',
      //       options: {
      //         cacheName: 'google-fonts-cache',
      //         expiration: {
      //           maxEntries: 10,
      //           maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
      //         },
      //         cacheableResponse: {
      //           statuses: [0, 200],
      //         },
      //       },
      //     },
      //     {
      //       urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
      //       handler: 'CacheFirst',
      //       options: {
      //         cacheName: 'gstatic-fonts-cache',
      //         expiration: {
      //           maxEntries: 10,
      //           maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
      //         },
      //         cacheableResponse: {
      //           statuses: [0, 200],
      //         },
      //       },
      //     },
      //   ],
      // },
    }),
  ],
})
