export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("currency", (amount, locale = "id-ID", currency = "IDR") => {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  });
});
