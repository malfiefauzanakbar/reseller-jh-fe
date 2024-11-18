<template>
  <Home />
</template>

<script setup>
    import { defineAsyncComponent } from 'vue';
    import { useHead } from '@vueuse/head'
    import { useRoute } from 'vue-router'
    
    const runtimeConfig = useRuntimeConfig();
    const route = useRoute()
    const baseUrl = runtimeConfig.public.apiBaseUrl
    useHead({
        title: 'Jims Honey Reseller | You Deserve The Best',
        link: [
            {
                rel: 'canonical',
                href: `${baseUrl}${route.fullPath}`
            }
        ],
    })

    definePageMeta({
        layout: 'home',
    })

    const Home = defineAsyncComponent(() =>
        import('~/components/Home.vue'),
    );
    
</script>