// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content'],
  runtimeConfig: {
    public: {
      googleAnalyticsMeasurementId: 'G-1GCQMMZ3Q6',
    },
  },
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    },
  },
  nitro: {
    preset: 'netlify-static',
  },
})
