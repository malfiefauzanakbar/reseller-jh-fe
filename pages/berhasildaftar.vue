<template>
    <ThankyouPage />
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
import { useHead } from '@vueuse/head'
import { useRoute } from 'vue-router'

const runtimeConfig = useRuntimeConfig();
const route = useRoute()
const baseUrl = runtimeConfig.public.apiBaseUrl
useHead({
    title: 'Terimakasih sudah mendaftar',
    link: [
        {
            rel: 'canonical',
            href: `${baseUrl}${route.fullPath}`
        }
    ],
})

definePageMeta({
    layout: 'blank',
})

const ThankyouPage = defineAsyncComponent(() =>
    import('~/components/ThankyouPage.vue'),
);

</script>