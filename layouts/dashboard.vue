<template>
    <sidebar/>
    <div class="lg:p-10 p-2 sm:ml-64 mt-14">
        <NuxtPage />
    </div>
</template>

<script setup>
    import { defineAsyncComponent } from 'vue';

    const sidebar = defineAsyncComponent(() =>
        import('~/components/dashboard/Sidebar.vue'),
    );
</script>

<style lang="scss" scoped>
</style>