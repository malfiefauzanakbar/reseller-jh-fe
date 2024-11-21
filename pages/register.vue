<template>
    <Register />
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
import { useHead } from '@vueuse/head'
import { useRoute } from 'vue-router'

const runtimeConfig = useRuntimeConfig();
const route = useRoute()
const baseUrl = runtimeConfig.public.apiBaseUrl
useHead({
    title: 'Register Reseller',
    link: [
        {
            rel: 'canonical',
            href: `${baseUrl}${route.fullPath}`
        }
    ],
})
definePageMeta({
    layout: 'default',
    middleware: 'auth'
})
const Register = defineAsyncComponent(() =>
    import('~/components/Register.vue'),
);

</script>

<style lang="scss"></style>