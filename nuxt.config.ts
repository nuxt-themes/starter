// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    // https://content.nuxtjs.org
    '@nuxt/content',
    // https://github.com/Tahul/pinceau
    'pinceau/nuxt'
  ],

  content: {
    documentDriven: true
  },

  pinceau: {
    configFileName: 'tokens.config'
  }
})
