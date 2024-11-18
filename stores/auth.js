import { defineStore } from "pinia";
import { useCookie } from "#app";
import axios from "axios";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isLoggedIn: !!useCookie("token").value,
    profile: null,
    payment: null,
    unreadMessage: 0,
    islogin: false,
    isloginform: false,
    req: {
      username: "",
      password: "",
    },
    rememberMe: false,
  }),
  actions: {
    async login(username, password, type) {
      if (type === "form") {
        this.isloginform = true;
      } else if (type === "header") {
        this.islogin = true;
      }
      const api = useNuxtApp().$api;
      try {
        const response = await api.post(
          `/api/login`,
          { username, password },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const { token } = response.data.data;
        this.islogin = false;
        this.isloginform = false;
        useCookie("token").value = token;
        window.location.href = "/";
      } catch (error) {
        this.islogin = false;
        this.isloginform = false;
        toast("Username atau password tidak sesuai!", {
          theme: "dark",
          type: "warning",
          position: "top-left",
          dangerouslyHTMLString: true,
        });
      }
    },
    checkLogin() {
      const token = useCookie("token").value;
      this.isLoggedIn = !!token;
      if (this.isLoggedIn) {
        this.fetchProfile();
      }
    },
    async fetchProfile() {
      const runtimeConfig = useRuntimeConfig();
      const token = useCookie("token").value;
      try {
        const { data } = await axios.get(
          `${runtimeConfig.public.apiBaseUrl}/api/account/member`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        this.profile = data.data.member;
        this.payment = data.data.payment;
        this.unreadMessage = data.data.unreadMessage;
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.logout();
        }
      }
    },
    logout() {
      useCookie("token").value = null;
      this.isLoggedIn = false;
      this.profile = null;
      window.location.href = "/login";
    },
  },
});
