import { defineStore } from "pinia";
import { useCookie } from "#app";
import { useRouter } from "#app";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isLoggedIn: false,
    islogin: false,
    username: "",
    password: "",
    isRegis: "",
    email: "",
    usernameRegis: "",
    passwordRegis: "",
    confirmPasswordRegis: ""
  }),
  getters: {
    getUsername: () => useCookie("username").value || "",
    getEmail: () => useCookie("email").value || "",
  },
  actions: {
    async login(username, password) {
      this.islogin = true;
      const api = useNuxtApp().$api;
      const router = useRouter();
      try {
        const response = await api.post(
          `/login`,
          { username, password },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const {
          token,
          username: returnedUsername,
          email: returnedEmail,
        } = response.data.data;
        useCookie("token").value = token;
        useCookie("username").value = returnedUsername || username;
        useCookie("email").value = returnedEmail || email;

        this.isLoggedIn = true;
        this.islogin = false;
        router.push("/dashboard");
      } catch (error) {
        this.islogin = false;
        const errorMessage =
          error.response?.data?.error || "Username atau password tidak sesuai!";
        toast(errorMessage, {
          theme: "light",
          type: "warning",
          position: "top-right",
          dangerouslyHTMLString: true,
        });
      }
    },
    async register(email, username, password, password_confirmation) {
      this.isRegis = true;
      const api = useNuxtApp().$api;
      const router = useRouter();
      const payload = {};
      if (email) payload.email = email;
      if (username) payload.username = username;
      if (password) payload.password = password;
      if (password_confirmation) payload.password_confirmation = password_confirmation;
      try {
        const response = await api.post(
          `/register`,
          payload,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        this.isRegis = false;
        router.push("/login");
      } catch (error) {
        this.isRegis = false;
        toast("Terjadi kesalahan", {
          theme: "dark",
          type: "warning",
          transition: "slide",
          dangerouslyHTMLString: true,
        });
      }
    },
    checkLogin() {
      const token = useCookie("token").value;
      this.isLoggedIn = !!token;
    },
    logout() {
      useCookie("token").value = null;
      useCookie("username").value = null;
      useCookie("email").value = null;
      this.isLoggedIn = false;
      useRouter().push("/login");
    },
  },
});
