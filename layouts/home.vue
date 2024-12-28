<template>
    <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KDBZ32TS" height="0" width="0"
            style="display:none;visibility:hidden"></iframe>
    </noscript>
    <Header />
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

<style lang="scss" scoped></style>