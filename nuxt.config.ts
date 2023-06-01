import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    // https://nuxt.studio
    '@nuxthq/studio',
    // https://content.nuxtjs.org
    '@nuxt/content',
    // https://pinceau.dev
    'pinceau/nuxt',
    // https://tailwindcss.nuxtjs.org
    '@nuxtjs/tailwindcss'
  ],
  content: {
    documentDriven: true
  },
  pinceau: {
    studio: true,
    preflight: false
  },
  typescript: {
    includeWorkspace: true
  },
  tailwindcss: {
    cssPath: resolve('assets/css/tailwind.css')
  }
})
