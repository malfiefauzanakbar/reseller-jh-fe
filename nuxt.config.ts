export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["@/assets/styles/main.scss", "vue3-carousel/dist/carousel.css"],
  render: {
    static: {
      cacheControl: true,
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "id",
      },
      meta: [
        {
          name: "description",
          content:
            "Jims Honey Official Indonesia merupakan brand fashion lokal yang memproduksi tas, dompet, dan juga jam tangan dewasa untuk pria dan wanita.",
        },
        {
          name: "keywords",
          content:
            "fashion, Jims Honey, supplier tas, join reseller jimshoney, reseller jimshoney, supplier jimshoney, jimshoney pusat, tas wanita, dompet wanita, powerbank, jam tangan, supplier jam tangan, supplier jam, supplier powerbank, grosir jimshoney, jimshoney official, jimshoney indonesia, supplier dompet, wholesale, jualan grosir, join reseller, dropship jimshoney, dropship, retail, fashion bags, style, lokal brand indonesia, dropshipper, belajar bisnis",
        },
      ],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ssr: true,
  target: "static",
  router: {
    middleware: "auth",
  },
  plugins: [
    "~/plugins/axios.js",
    "~/plugins/fontawesome.js",
    "~/plugins/recaptcha.js"
  ],
  veeValidate: {
    autoImports: true,
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL,
      recaptchaSiteKey: process.env.RECAPTCHA_SITE_KEY
    },
  },
  modules: [
    "@nuxt/image",
    "@vee-validate/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/google-fonts",
  ],
  googleFonts: {
    families: {
      "Baloo 2": [100, 300, 400, 500, 700, 900],
      "Open+Sans": true,
    },
    display: "swap",
    preload: true,
    prefetch: true,
    download: true,
  },
  buildModules: ["nuxt-windicss"],
});
