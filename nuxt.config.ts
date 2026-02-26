// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxthub/core',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    'nuxt-security'
  ],
  css: ['~/assets/css/main.css'],

  hub: {
    db: 'sqlite',
    blob: true
  },

  security: {
    headers: {
      contentSecurityPolicy: {
        'img-src': ["'self'", 'data:', 'blob:'],
      },
    },
    basicAuth: {
      enabled: true,
      name: 'admin',
      pass: 'admin',
      message: 'Yggoo Admin',
      include: ['/admin', '/admin/**']
    },
    requestSizeLimiter: {
      maxUploadFileRequestInBytes: 10485760
    }
  },

  vite: {
    server: {
      allowedHosts: 'all',
      hmr: {
        clientPort: 443
      }
    }
  },

  nitro: {
    preset: 'cloudflare-pages',
  },

  devServer: {
    host: '0.0.0.0'
  }
})
