// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    // https://nuxt.studio
    '@nuxthq/studio',
    // https://content.nuxtjs.org
    '@nuxt/content',
    // https://pinceau.dev
    'pinceau/nuxt',
    // https://unocss.dev
    '@unocss/nuxt'
  ],
  content: {
    documentDriven: true
  },
  pinceau: {
    studio: true
  },
  typescript: {
    includeWorkspace: true
  },
  unocss: {
    attributify: true,
    icons: true,
    components: true,
    uno: true,
    theme: {
      size: {
        header: 'var(--header-height)'
      },
      fontFamily: {
        primary: 'var(--font-primary)'
      },
      colors: {
        grey: 'var(--color-grey)',
        primary: {
          50: 'var(--color-primary-50)',
          100: 'var(--color-primary-100)',
          200: 'var(--color-primary-200)',
          300: 'var(--color-primary-300)',
          400: 'var(--color-primary-400)',
          500: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
          800: 'var(--color-primary-800)',
          900: 'var(--color-primary-900)'
        }
      }
    }
  },
})
