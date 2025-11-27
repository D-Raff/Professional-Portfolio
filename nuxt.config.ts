export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@hypernym/nuxt-gsap', '@pinia/nuxt'],
  nitro: {
    preset: 'netlify'
  },
  gsap: {
    composables: true,
    provide: false,
    extraPlugins: {
      scrollTrigger: true,
    }
  },
  css: ['/assets/css/style.css'],
  app: {
    head: {
      title: 'Damon Raffels',
      link:[
        {
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
          rel: "stylesheet",
          integrity:"sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH",
          crossorigin: "anonymous"
        },
        {
          rel: "preload",
          as: "image",
          href: "https://iili.io/Jy4RwiJ.png",
        }
      ],
      script: [
        {
          src:"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
          integrity:"sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz",
          crossorigin:"anonymous"
        }
      ]
    }
  }
})
