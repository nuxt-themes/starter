// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    // https://nuxt.studio
    '@nuxthq/studio',
    // https://content.nuxtjs.org
    '@nuxt/content',
    // https://pinceau.dev
    'pinceau/nuxt'
  ],
  content: {
    documentDriven: true
  },
  pinceau: {
    studio: true
  },
  typescript: {
    includeWorkspace: true
  }
})
