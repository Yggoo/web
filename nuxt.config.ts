// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui'
  ],
  css: ['~/assets/css/main.css'],
  
  vite: {
    server: {
      hmr: {
        clientPort: 443
      }
    }
  },
  
  devServer: {
    host: '0.0.0.0'
  }
})
