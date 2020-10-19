// import * as firebase from './firebase.config.js'

const isDev = process.env.NODE_ENV !== 'production'

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Enable modern mode for production
  modern: isDev ? false : 'server',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxt-starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: ['~/components/global/'],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://github.com/nuxt-community/google-fonts-module
    '@nuxtjs/google-fonts',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['nuxt-client-init-module' /** '@nuxtjs/firebase' */],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    parallel: isDev,
    extend(config) {
      config.resolve.alias['@collections'] = '@/api/collections'
    },
  },

  googleFonts: {
    families: {
      Roboto: [100, 300, 400, 500, 700],
    },
  },

  // firebase: {
  //   config: isDev ? firebase.staging : firebase.live,
  //   services: {
  //     auth: {
  //       initialize: {
  //         onAuthStateChangedAction: 'auth/onStateChange',
  //       },
  //     },
  //     firestore: true,
  //     storage: true,
  //     performance: true,
  //   },
  // },
}
