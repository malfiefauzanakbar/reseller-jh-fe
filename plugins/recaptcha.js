import { VueReCaptcha } from 'vue-recaptcha-v3'
export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig()
  const options = {
    siteKey: config.public.recaptchaSiteKey,
    loaderOptions: {
        autoHideBadge: false,
        explicitRenderParameters: {
            badge: 'bottomright',
        },
    },
    // loaderOptions: {
    //   autoHideBadge: false,
    //   useRecaptchaNet: true,
    //   renderParameters: {
    //     hl: 'id'
    //   }
    // }
  }
  nuxtApp.vueApp.use(VueReCaptcha, options)
})