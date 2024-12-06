import { VueReCaptcha } from 'vue-recaptcha-v3'
export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig()
  const options = {
    siteKey: config.public.recaptchaSiteKey,
    loaderOptions: {
        autoHideBadge: false,
        explicitRenderParameters: {
            badge: 'bottomleft',
        },
    },
  }
  nuxtApp.vueApp.use(VueReCaptcha, options)
})