<template>
    <div class="h-screen bg-[#FAF4F8] relative">
        <div class="h-screen overflow-x-hidden relative">
            <div class="flex h-screen items-center justify-center p-4 z-20">
                <div class="p-6 rounded-xl w-full text-center relative">
                    <h1 class="text-primaryColor lg:text-[100px] text-[55px] font-bold">
                        Thank <span class="text-[#f5dfe3]">You</span>
                    </h1>
                    <h3 class="lg:text-xl text-md font-light text-primaryColor">
                        Terimakasih sudah daftar sebagai reseller yaaaa
                    </h3>
                    <div class="mt-8 flex items-center justify-center">
                        <NuxtLink to="/"
                            class="bg-primaryColor border border-black py-3 px-6 rounded-lg shadow-md flex items-center justify-center">
                            <client-only>
                                <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-[18px] mr-2" />
                            </client-only>
                            Kembali ke Beranda
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useHead } from '@vueuse/head'
import { useRoute } from 'vue-router'

const runtimeConfig = useRuntimeConfig();
const route = useRoute()
const baseUrl = runtimeConfig.public.apiBaseUrl
useHead({
    title: 'Terimakasih Sudah Daftar',
    link: [
        {
            rel: 'canonical',
            href: `${baseUrl}${route.fullPath}`
        }
    ],
})
definePageMeta({
    layout: "blank",
})
</script>
<style scoped lang="scss">
.leading-404 {
    line-height: 12rem;
}
</style>