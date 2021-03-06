import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'spa', // Netlify
  generate: {
    devtools: true,
    fallback: true
  },
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s | Brandon Julio Thenaro',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: colors.blue.base },
  /*
   ** Global CSS
   */
  css: ['typeface-roboto', '~/assets/styles.scss'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify',
    [
      '@nuxtjs/google-analytics',
      {
        id: process.env.GOOGLE_ANALYTICS_TRACKING_ID
      }
    ]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxt/content',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    defaultAssets: false,
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    crossorigin: 'anonymous',
    extractCSS: true,
    extend(config, _) {
      config.optimization.splitChunks.maxSize = 200000
    },
    postcss: {
      plugins: {
        'postcss-responsive-type': {}
      }
    }
  },
  /*
   ** Nuxt PWA
   */
  pwa: {
    manifest: {
      name: "Brandon Julio Thenaro's Website",
      lang: 'en'
    },
    meta: {
      nativeUI: true,
      ogHost: 'https://www.brandonjuliothenaro.my.id',
      twitterCard: 'summary',
      twitterSite: '@brandon_julio_t'
    }
  },
  /*
   ** Nuxt Sitemap
   */
  sitemap: {
    hostname: 'https://www.brandonjuliothenaro.my.id'
  },
  /*
   ** https://nuxtjs.org/api/configuration-env#__layout
   */
  env: {
    GITHUB_GRAPHQL_API_TOKEN: process.env.GITHUB_GRAPHQL_API_TOKEN
  }
}
