import { field } from '@nuxthq/studio/theme'

export default defineNuxtSchema({
  appConfig: {
    /**
     * myTheme configuration.
     * @studio-icon carbon:blog
    */
    myTheme: {
      title: field({
        type: 'string',
        description: 'Website title, used as header default title and meta title.',
        icon: 'material-symbols:title',
        default: 'My Theme',
      }),
      description: field({
        type: 'string',
        description: 'Your website description, used in meta description and social links.',
        icon: 'material-symbols:description',
        default: 'My agency shiny theme.'
      }),
      icon: field({
        type: 'icon',
        description: 'Your website icon, used for your favicon.',
        icon: 'material-symbols:icecream',
      }),
      /**
       * Cover image.
       * @studio-icon dashicons:cover-image
       */
      image: {
        src: field({
          type: 'file',
          description: 'Your cover image URL.',
          default: '/social-card-preview.png',
        }),
        alt: field({
          type: 'string',
          description: 'Your cover image alt description.',
          default: 'An image showcasing my project.',
        }),
        width: field({
          type: 'number',
          description: 'Your cover image width.',
          default: 400,
        }),
        height: field({
          type: 'number',
          description: 'Your cover image height.',
          default: 300,
        }),
      }
    }
  }
})
