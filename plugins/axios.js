import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig();
  const api = axios.create({
    baseURL: runtimeConfig.public.apiBaseUrl,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  api.interceptors.request.use((config) => {
    const token = useCookie("token").value;
    // if (token) {
    //   config.headers['Token'] = token;
    // }
    config.params = {
      ...config.params,
    };
    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.data.message === "Unauthorized") {
        useCookie("token").value = null;
        window.location.href = "/login";
      }
      return Promise.reject(error);
    }
  );

  nuxtApp.provide("api", api);
});
