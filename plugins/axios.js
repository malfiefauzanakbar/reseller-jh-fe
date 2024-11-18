import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig();
  const api = axios.create({
    baseURL: runtimeConfig.public.apiBaseUrl,
  });

  api.interceptors.request.use((config) => {
    const token = useCookie("token").value;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    config.headers["X-Timezone"] = runtimeConfig.public.timezone;
    config.params = {
        ...config.params,
        lang: runtimeConfig.public.apiLang,
      };
    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.data.message === "Unauthenticated") {
        useCookie("token").value = null;
        window.location.href = "/login";
      }
      return Promise.reject(error);
    }
  );

  nuxtApp.provide("api", api);
});
