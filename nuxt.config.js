module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'demo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  router:{
    // routes: [
    //   {
    //     name: 'index',
    //     path: '/index',
    //     component: '~/pages/index.vue'
    //   },
    //   {
    //     name: 'hello',
    //     path: '/hello',
    //     component: '~/pages/inner/hello.vue'
    //   },
    // ]
    base: '/app/',
    extendRoutes (routes, resolve) {
      routes.push({
        name: 'custom',
        path: '/hello/todos',
        component: resolve(__dirname, 'pages/todos.vue')
      })
    }
  },
  generate: {
    routes: [
      '/inner/1',
      '/inner/2',
      '/inner/3'
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: [
    { src: '~/plugins/sizzle', ssr: false }
  ]
}
