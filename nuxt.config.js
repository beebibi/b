const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Bee Bibi',
    meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'To Bee or not to Bibi? #BeeBibi. Brought to you by Tel Aviv Digital.' },
      { name: 'apple-mobile-web-app-title', content: 'BeeBibi.com' },
      { name: 'application-name', content: 'BeeBibi.com' },
      { property: 'og:title', content: 'BeeBibi.com'},
      { property: 'og:url', content: 'https://beebibi.com'},
      { property: 'og:image', content: 'https://beebibi.com/images/beebibi-poster-fbk.jpg'},
      { property: 'og:description', content: 'To Bee or not to Bibi? #BeeBibi'},
      { name: 'twitter:card', content: 'summary_large_image'},
      { name: 'twitter:site', content: '@tlvd'},
      { name: 'twitter:title', content: 'BeeBibi.com'},
      { name: 'twitter:description', content: 'To Bee or not to Bibi? https://beebibi.com @netanyahu #BeeBibi'},
      { name: 'twitter:image', content: 'https://beebibi.com/images/beebibi-poster-twt.jpg'},
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'msapplication-TileColor', content: '#222640' },
      { name: 'theme-color', content: '#222640' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5b4cff' },
      // { rel: 'preload', href: '/_nuxt/assets/images/bibi-1.png', as: 'image' },
      // { rel: 'preload', href: '/_nuxt/assets/images/bibi-2.png', as: 'image' },
      // { rel: 'preload', href: '/_nuxt/assets/images/bibi-3.png', as: 'image' },
      // { rel: 'preload', href: '/_nuxt/assets/images/bibi-4.png', as: 'image' },
      // { rel: 'preload', href: '/audio/fart-1.mp3', as: 'audio' }
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700|Roboto:100,300,400,500,700' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  // loading: { color: '#ffffff', css: false },
  // loading: '~/components/BeeLoader.vue',
  // loading: false,
  // loadingIndicator: {
  //   // name: '~/plugins/loading.html',
  //   name: '~plugins/loading.html',
  //   color: '#fff',
  //   background: 'darkblue'
  // },
  loadingIndicator: '~/plugins/loading.html',

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/vue-hammer.js', ssr: false },
    { src: '~plugins/ga.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/pwa',
    ['@nuxtjs/google-tag-manager', { id: 'GTM-5Z3MQPC' }]
  ],
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  styleResources: {
    scss: [
      './assets/scss/main.scss'
    ],
  },
  pwa: {
    icon: false,
    // meta: false,
    manifest: false
    // oneSignal: false
  },
  // googleTagManager: {
  //   id: 'GTM-5Z3MQPC'
  // },

  /*
  ** Generate configuration
  */
  // generate: {
  //   dir: 'docs'
  // },
  /*
  ** Build configuration
  */
  build: {
    // analyze: true,
    // cache: true,
    /*
    ** You can extend webpack config here
    */
    // productionMode: !this.options.dev,
    // transformAssetUrls: {
    //   video: 'src',
    //   source: 'src',
    //   object: 'src',
    //   embed: 'src',
    //   audio: 'src'
    // },
    extend(config, ctx) {
      process.noDeprecation = true
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push(
        {
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
