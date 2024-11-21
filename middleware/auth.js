export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie('token').value;

  const isLoggedIn = Boolean(token);

  if (isLoggedIn) {
    if (to.path === '/login' || to.path === '/register') {
      return navigateTo('/dashboard');
    }
  } else {
    if (to.path !== '/login' && to.path !== '/register') {
      return navigateTo('/login');
    }
  }
});
