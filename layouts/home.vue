<template>
    <Header/>
    <NuxtPage />
    <Footer />
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const Header = defineAsyncComponent(() =>
    import('~/components/layouts/Header.vue'),
);
const Footer = defineAsyncComponent(() =>
    import('~/components/layouts/Footer.vue'),
);

</script>

<style lang="scss" scoped>
</style>