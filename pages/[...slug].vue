<template>
    <div class="h-screen bg-[#FAF4F8] relative">
        <nuxt-img src="/images/kincir.webp" class="absolute right-16 bottom-0"  title="" alt="" loading="lazy" />
        <nuxt-img src="/images/butterfly-1.webp" class="absolute left-32 top-24" width="60" title="" alt=""
                loading="lazy" />
        <nuxt-img src="/images/daun-1.webp" class="absolute left-0 top-0" width="100" title="" alt="" loading="lazy" />
        <div class="h-screen overflow-x-hidden relative">
            <div class="flex h-screen items-center justify-center p-4 z-20">
                <div class="p-6 rounded-xl lg:w-1/3 w-full text-center">
                    <h2 class="text-[200px] font-semibold text-[#E8B5BA] leading-404 outline-4">
                        4<span class="text-[#f5dfe3]">0</span>4
                    </h2>
                    <h3 class="text-3xl font-medium text-[#e8b5ba]">
                        Halaman Tidak Ditemukan
                    </h3>
                    <div class="mt-8 flex items-center justify-center">
                        <NuxtLink to="/" class="bg-[#E8B5BA] border border-black py-3 px-6 rounded-lg shadow-md flex items-center justify-center">
                            Kembali Kehalaman Sebelumnya
                            <client-only>
                                <font-awesome-icon :icon="['fas', 'arrow-right']" class="text-[18px] ml-2" />
                            </client-only>
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
    title: 'Page Not Found',
    link: [
        {
            rel: 'canonical',
            href: `${baseUrl}${route.fullPath}`
        }
    ],
})
definePageMeta({
    layout: "blank",
    title: "404 - Page Not Found"
})
</script>
<style scoped lang="scss">
    .leading-404{
        line-height: 12rem;
    }
</style>