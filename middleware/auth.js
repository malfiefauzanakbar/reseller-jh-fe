export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie('token').value;

  // Cek jika pengguna sudah login
  const isLoggedIn = Boolean(token);

  // Jika sudah login dan mencoba mengakses login atau register
  if (isLoggedIn) {
    // Redirect ke halaman home jika mencoba mengakses /login atau /register
    if (to.path === '/login' || to.path === '/register') {
      return navigateTo('/');
    }
  } else {
    // Jika tidak login dan mencoba mengakses halaman selain login atau register
    if (to.path !== '/login' && to.path !== '/register') {
      return navigateTo('/login');
    }
  }
});
