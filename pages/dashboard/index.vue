<template>
    <Dashboard />
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
import { useHead } from '@vueuse/head'
import { useRoute } from 'vue-router'

const runtimeConfig = useRuntimeConfig();
const route = useRoute()
const baseUrl = runtimeConfig.public.apiBaseUrl
useHead({
    title: 'Dashboard Reseller',
    link: [
        {
            rel: 'canonical',
            href: `${baseUrl}${route.fullPath}`
        }
    ],
})
definePageMeta({
    layout: 'dashboard',
    // middleware: 'auth'
})
const Dashboard = defineAsyncComponent(() =>
    import('~/components/dashboard/Container'),
);
</script>

<style lang="scss"></style>