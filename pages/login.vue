<template>
    <Login />
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
import { useHead } from '@vueuse/head'
import { useRoute } from 'vue-router'

const runtimeConfig = useRuntimeConfig();
const route = useRoute()
const baseUrl = runtimeConfig.public.apiBaseUrl
useHead({
    title: 'Login Reseller',
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
const Login = defineAsyncComponent(() =>
    import('~/components/Login.vue'),
);
</script>

<style lang="scss"></style>