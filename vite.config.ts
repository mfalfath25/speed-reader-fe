import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'

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
        runtimeCaching: [
          {
            urlPattern: ({ url }) => {
              return url.pathname.startsWith('/api/')
            },
            handler: 'NetworkFirst',
            options: {
              cacheName: 'api-cache',
              backgroundSync: {
                name: 'api-queue',
                options: {
                  maxRetentionTime: 24 * 60, // Retry for max of 24 Hours (specified in minutes)
                },
              },
              plugins: [
                {
                  cacheDidUpdate: async ({
                    cacheName,
                    request,
                    oldResponse,
                    newResponse,
                  }) => {
                    if (cacheName === 'api-cache') {
                      // oldResponse && console.log('oldResponse', oldResponse)
                      // newResponse && console.log('newResponse', newResponse)
                      // request && console.log('request', request)
                      const cache = await caches.open('api-cache')
                      const keys = await cache.keys()
                      const urls = keys.map((key) => key.url)
                      console.log(urls)
                    }
                  },
                },
              ],
              cacheableResponse: {
                statuses: [200],
              },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
              },
              cacheableResponse: {
                statuses: [200],
              },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'gstatic-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
              },
              cacheableResponse: {
                statuses: [200],
              },
            },
          },
        ],
      },
      includeAssets: ['src/assets/**/*'],
      registerType: 'autoUpdate',
    }),
  ],
})
