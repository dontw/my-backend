module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "my-backend",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "my personal backend"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
  ** Global SCSS
  */
  css: [
    {
      src: "../assets/scss/main.scss",
      lang: "scss"
    }
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },

  plugins: [{ src: "~plugins/iview.js" }],
  modules: [
    [
      "nuxt-i18n",
      {
        locales: [
          { code: "tw", iso: "zh-tw", langFile: "tw.json", name: "臺灣正體" },
          { code: "en", iso: "en-us", langFile: "en.json", name: "English" }
        ],
        defaultLocale: "tw",
        loadLanguagesAsync: true
      }
    ]
  ]
};
