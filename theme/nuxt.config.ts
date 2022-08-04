import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  theme: {
    meta: {
      name: 'Theme Starter',
      description: 'The best place to start your Nuxt Theme.',
      author: 'NuxtLabs'
    },
    options: true
  },

  modules: [
    '@nuxt-themes/config/module',
    '@nuxtjs/design-tokens/module',
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxthq/studio',
    '@nuxtjs/color-mode'
  ],

  tailwindcss: {
    configPath: './tailwind.config.js',
    injectPosition: 'last',
    classSuffix: ''
  },

  colorMode: {
    classSuffix: ''
  },

  css: [
    // Including Inter CSS is the first component to reproduce HMR issue. It also causes playground to look better,
    // since Inter is a native font for Tailwind UI
    '@fontsource/inter/400.css',
    '@fontsource/inter/500.css',
    '@fontsource/inter/600.css',
    '@fontsource/inter/700.css'
  ],

  content: {
    documentDriven: true,
    highlight: {
      theme: 'one-dark-pro',
      preload: ['json', 'js', 'ts', 'html', 'css', 'vue', 'diff', 'shell', 'markdown', 'yaml', 'bash', 'ini', 'c', 'cpp']
    }
  }
})
