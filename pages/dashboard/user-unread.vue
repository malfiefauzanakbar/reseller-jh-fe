<template>
    <UserUnread />
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
import { useHead } from '@vueuse/head'
import { useRoute } from 'vue-router'

const runtimeConfig = useRuntimeConfig();
const route = useRoute()
const baseUrl = runtimeConfig.public.apiBaseUrl
useHead({
    title: 'User Unread',
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
const UserUnread = defineAsyncComponent(() =>
    import('~/components/dashboard/UserUnread'),
);
</script>

<style lang="scss"></style>