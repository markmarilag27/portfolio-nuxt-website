import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: 'Mark Marilag | %s',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no' },
        { hid: 'description', name: 'description', content: 'Mark Marilag is an experience full stack developer who works in the web industry for the last 5 years.' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'crossorigin' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap' }
      ]
    },
  },
  css: [
    '@/assets/css/tailwind.css',
  ],
  build: {
    postcss: {
      postcssOptions: require('./postcss.config'),
    }
  }
})
