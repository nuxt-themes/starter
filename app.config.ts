export default defineAppConfig({
  myTheme: {
    name: 'My Nuxt Theme'
  }
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    myTheme?: {
      /** Project name */
      name?: string
    }
  }
}
