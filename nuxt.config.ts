import { NuxtConfig } from '@nuxt/types'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import i18n from './nuxt-i18n.config'
const purgecss = require('@fullhuman/postcss-purgecss')
const autoprefixer = require('autoprefixer')
const environment = process.env.NODE_ENV || 'development'

const config: NuxtConfig = {
  mode: 'universal',
  target: 'static',
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://iwate.stopcovid19.jp',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'fb:app_id',
        property: 'fb:app_id',
        content: '320122459207066',
      },
      {
        hid: 'note:card',
        property: 'note:card',
        content: 'summary_large_image',
      },
    ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon-precomposed.png' },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~assets/global.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '@/plugins/vue-chart.ts',
      ssr: true,
    },
    {
      src: '@/plugins/axe',
      ssr: true,
    },
    {
      src: '@/plugins/vuetify.ts',
      ssr: true,
    },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
    '@nuxt/typescript-build',
    '@nuxtjs/google-analytics',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    ['@nuxtjs/dotenv', { filename: `.env.${environment}` }],
    ['nuxt-i18n', i18n],
    'nuxt-svg-loader',
    'nuxt-purgecss',
    ['vue-scrollto/nuxt', { duration: 1000, offset: -72 }],
    '@nuxtjs/sitemap',
    'nuxt-webfontloader',
  ],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    defaultAssets: false,
  },
  /*
   * Webfontloader
   * https://github.com/Developmint/nuxt-webfontloader
   */
  webfontloader: {
    google: {
      families: ['Roboto:100,300,400,500,700,900&display=swap'],
    },
  },
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID, // .env.production などに設定してください。
  },
  /*
   * nuxt-i18n による自動リダイレクトを停止したためコメントアウト
   * @todo 「Cookieがあるときのみ、その言語にリダイレクトする」を実装する場合は復活させる
   * 実装しない場合は以下の記述を完全に削除する
   */
  /* optionalCookies: [
    {
      name: 'i18n_redirected',
      label: 'i18n Redirection Cookie',
      description:
        'For automatically switching UI languages in accordance with locale preferences in the web browser configuration.',
      cookies: ['i18n_redirected']
    }
  ], */
  build: {
    postcss: {
      plugins: [
        autoprefixer({ grid: 'autoplace' }),
        purgecss({
          content: [
            './pages/**/*.vue',
            './layouts/**/*.vue',
            './components/**/*.vue',
            './node_modules/vuetify/dist/vuetify.js',
            './node_modules/vue-spinner/src/ScaleLoader.vue',
          ],
          whitelist: ['html', 'body', 'nuxt-progress', 'DataCard'],
          whitelistPatterns: [/(col|row)/],
        }),
      ],
    },
    extend(config) {
      // default externals option is undefined
      config.externals = [{ moment: 'moment' }]
    },
    // https://ja.nuxtjs.org/api/configuration-build/#hardsource
    // hardSource: process.env.NODE_ENV === 'development'
  },
  manifest: {
    name: '岩手県 新型コロナウイルス感染症対策サイト',
    theme_color: '#00a040',
    background_color: '#ffffff',
    display: 'standalone',
    Scope: '/',
    start_url: '/',
    splash_pages: null,
  },
  generate: {
    fallback: true,
    routes() {
      const locales = ['en', 'zh-cn', 'zh-tw', 'ko', 'ja-basic']
      const pages = [
        '/cards/details-of-confirmed-cases',
        '/cards/number-of-confirmed-cases',
        '/cards/monitoring-number-of-confirmed-cases',
        '/cards/positive-rate',
        '/cards/number-of-hospitalized',
        '/cards/attributes-of-confirmed-cases',
        '/cards/number-of-confirmed-cases-by-municipalities',
        '/cards/number-of-tested',
        '/cards/monitoring-number-of-reports-to-covid19-consultation-desk',
        '/cards/number-of-reports-to-covid19-telephone-advisory-center',
      ]
      const localizedPages = locales
        .map((locale) => pages.map((page) => `/${locale}${page}`))
        .reduce((a, b) => [...a, ...b], [])
      return [...pages, ...localizedPages]
    },
  },
  // /*
  // ** hot read configuration for docker
  // */
  watchers: {
    webpack: {
      poll: true,
    },
  },
  sitemap: {
    hostname: 'https://iwate.stopcovid19.jp/',
    gzip: true,
    exclude: ['/about', '/contacts', '/flow', '/worker', '/print/flow'],
    routes() {
      dayjs.extend(utc)
      const now = dayjs().utc().format()
      return [
        {
          url: '/',
          changefreq: 'daily',
          priority: 1.0,
          lastmod: now,
        },
        {
          url: '/cards/details-of-confirmed-cases/',
          changefreq: 'daily',
          priority: 0.8,
          lastmod: now,
        },
        {
          url: '/cards/number-of-confirmed-cases/',
          changefreq: 'daily',
          priority: 0.8,
          lastmod: now,
        },
        {
          url: '/cards/monitoring-number-of-confirmed-cases/',
          changefreq: 'daily',
          priority: 0.8,
          lastmod: now,
        },
        {
          url: '/cards/positive-rate/',
          changefreq: 'daily',
          priority: 0.8,
          lastmod: now,
        },
        {
          url: '/cards/number-of-hospitalized/',
          changefreq: 'daily',
          priority: 0.8,
          lastmod: now,
        },
        {
          url: '/cards/attributes-of-confirmed-cases/',
          changefreq: 'daily',
          priority: 0.8,
          lastmod: now,
        },
        {
          url: '/cards/number-of-confirmed-cases-by-municipalities/',
          changefreq: 'daily',
          priority: 0.8,
          lastmod: now,
        },
        {
          url: '/cards/number-of-tested/',
          changefreq: 'daily',
          priority: 0.8,
          lastmod: now,
        },
        {
          url:
            '/cards/monitoring-number-of-reports-to-covid19-consultation-desk/',
          changefreq: 'daily',
          priority: 0.8,
          lastmod: now,
        },
        {
          url: '/cards/number-of-reports-to-covid19-telephone-advisory-center/',
          changefreq: 'daily',
          priority: 0.8,
          lastmod: now,
        },
        {
          url: '/about/',
          changefreq: 'monthly',
          priority: 0.5,
          lastmod: now,
        },
        {
          url: '/contacts/',
          changefreq: 'monthly',
          priority: 0.5,
          lastmod: now,
        },
        {
          url: '/flow/',
          changefreq: 'monthly',
          priority: 0.8,
          lastmod: now,
        },
        {
          url: '/worker/',
          changefreq: 'monthly',
          priority: 0.8,
          lastmod: now,
        },
        {
          url: '/contacts/',
          changefreq: 'monthly',
          priority: 0.7,
          lastmod: now,
        },
      ]
    },
  },
}

export default config
