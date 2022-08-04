/** @type {import('tailwindcss').Config} */
import { $dt } from '@nuxtjs/design-tokens'

module.exports = {
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp')
  ],
  theme: {
    extend: {
      colors: {
        // Customize the feeling of your site
        primary: $dt('colors.primary')
      },
      fontFamily: {
        sans: 'Inter, ui-sans-serif, system-ui, -apple-system, Arial, Roboto, sans-serif'
      }
    }
  }
}
