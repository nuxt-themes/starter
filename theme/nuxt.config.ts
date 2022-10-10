import { defineNuxtConfig } from 'nuxt/config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    'pinceau/nuxt',
    '@nuxt/content'
  ],
  content: {
    documentDriven: true
  },
  pinceau: {
    configFileName: 'tokens.config'
  }
})
