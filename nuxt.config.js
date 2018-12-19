const pkg = require('./package')
const config = require('./config')

module.exports = {
  mode: 'universal',

  router: {
    middleware: ['states'],
    extendRoutes (routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/index.vue')
      })
    }
  },
  /*
  ** Headers of the page
  */
  head: {
    title: config.CLIENT.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@gauseen/nuxt-proxy',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    proxy: true
  },
  proxyTable: {
      '/course': {target: config.baseUrl, ws: false },
      '/web': {target: config.baseUrl, ws: false},
      '/system': {target: config.baseUrl, ws: false },
      '/activity': {target: config.baseUrl, ws: false },
      '/user': {target: config.baseUrl, ws: false },
      '/agent': {target: config.baseUrl, ws: false }
  },

  cache: true,
  // or
  // cache: {
  //   max: 1000,
  //   maxAge: 900000
  // },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
