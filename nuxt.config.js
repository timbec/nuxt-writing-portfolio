const pkg = require('./package');

module.exports = {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  mode: 'universal',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "tim-beckett-writing-portfolio",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "The Writing Portfolio of Tim Beckett" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  /**
   * Customize the progress-bar color
   */
  loading: { color: '#09021d', height: '5px', duration: 5000 },

  loadingIndicator: {
    name: 'circle',
    color: 'blue'
  },

  env: {
    baseUrl: process.env.BASE_URL || 'https://timbeckett-writing.com',

    router: {

    },

    transition: {
      name: 'fade',
      mode: 'out-in'
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~styles.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/date-filter.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  generate: {
    dir: 'dist'
  }
};
