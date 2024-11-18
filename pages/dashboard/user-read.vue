<template>
    <UserRead />
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
import { useHead } from '@vueuse/head'
import { useRoute } from 'vue-router'

const runtimeConfig = useRuntimeConfig();
const route = useRoute()
const baseUrl = runtimeConfig.public.apiBaseUrl
useHead({
    title: 'User Read',
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
const UserRead = defineAsyncComponent(() =>
    import('~/components/dashboard/UserRead'),
);
</script>

<style lang="scss"></style>