// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  target: 'static',
  devServer: { port: 3211 },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/css/import.scss" as *;'
        }
      }
    }
  },

  css: [
    '@/assets/css/normalize.scss',
    '@/assets/css/base.scss'
  ],

  app: {
    head: {
      title: 'Presidio Bitcoin Design Week',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'msapplication-TileColor', content: '#FFDD00' },
        { name: 'theme-color', content: '#FFDD00' },
  
        { property: 'og:title', content: 'Presidio Bitcoin Design Week' },
  
        { hid: 'description', name: 'description', content:"We’re bringing together designers from the bitcoin community and designers from across Silicon Valley’s tech community to tackle how to beautify, simplify, amplify and human-ify bitcoin—our everyday money of the future." },
        { name: 'description', content: "We’re bringing together designers from the bitcoin community and designers from across Silicon Valley’s tech community to tackle how to beautify, simplify, amplify and human-ify bitcoin—our everyday money of the future." },
        { property: 'og:description', content: "We’re bringing together designers from the bitcoin community and designers from across Silicon Valley’s tech community to tackle how to beautify, simplify, amplify and human-ify bitcoin—our everyday money of the future." },
  
        { property: 'og:url', content: 'https://event.bitcoin.design' },
        { property: 'og:site_name', content: 'Presidio Bitcoin Design Week' },
        { property: 'og:image', content: 'https://event.bitcoin.design/preview.jpg' },
  
        { name: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:image', content: 'https://event.bitcoin.design/preview.jpg' },
        { property: 'twitter:title', content: 'Presidio Bitcoin Design Week' },
        { name: 'twitter:site', content: '@bitcoin_design' },

        { name: "apple-mobile-web-app-title",  content: "Presidio Bitcoin Design Week" }
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/favicon-96x96.png", sizes: "96x96" },
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "shortcut icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
        { rel: "manifest", href: "/site.webmanifest" }
      ],
      script: [
        { defer: true, src:"https://info.bitcoin.design/script.js", "data-website-id": "bcfff6db-f063-4e0e-8082-2a66ae178605" }
      ]
    }
  }
})
