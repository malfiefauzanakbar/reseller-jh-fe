<template>
    <div class="container lg:mt-24 mt-10 relative">
        <nuxt-img src="/images/kincir.webp" class="absolute lg:right-16 right-10 bottom-0"  title="" alt="" loading="lazy" />
        <div class="bg-white border border-[#E8B5BA] rounded-xl lg:p-10 p-4 mb-4">
            <h2 class="text-3xl font-bold">
                Dapatkan informasi Jims Honey
            </h2>
            <p class="mt-2 font-light">
                Got questions about the Landing Page UI Kit? Our team is here to help. Contact us for quick and friendly support.
            </p>
            <div class="lg:grid grid-cols-3 gap-10 lg:mt-10 mt-5">
                <div>
                    <h2 class="text-lg mb-4">
                        Kontak Kami
                    </h2>
                    <div class="font-light mb-4">
                        Ruko Grand Galaxy City RGK 582, Jaka Setia, Bekasi Selatan, West Java 17141
                    </div>
                    <div class="font-light mt-2">
                        <client-only>
                            <font-awesome-icon :icon="['fa', 'phone']" class="text-md mr-2 text-[#E8B5BA]" />
                        </client-only>
                        +62 813-8854-7228
                    </div>
                    <div class="font-light mt-2">
                        <client-only>
                            <font-awesome-icon :icon="['fa', 'envelope']" class="text-md mr-2 text-[#E8B5BA]" />
                        </client-only>
                        <a href="mailto:jimshoneypartnership@gmail.com">jimshoneypartnership@gmail.com</a>
                    </div>
                </div>
                <div class="lg:mt-0 mt-5">
                    <h2 class="text-lg mb-4">
                        Sosial Media
                    </h2>
                    <div class="flex items-center gap-4">
                        <a href="https://www.instagram.com/jimshoney.jakarta/" target="_blank">
                            <div class="w-10 h-10 rounded-full bg-[#F7E4E6] p-2 flex items-center justify-center">
                                <client-only>
                                    <font-awesome-icon :icon="['fab', 'instagram']" class="text-black text-[20px]" />
                                </client-only>
                            </div>
                        </a>
                        <a href="https://www.tiktok.com/@jims_honey_indonesia" target="_blank">
                            <div class="w-10 h-10 rounded-full bg-[#F7E4E6] p-2 flex items-center justify-center">
                                <client-only>
                                    <font-awesome-icon :icon="['fab', 'tiktok']" class="text-black text-[16px]" />
                                </client-only>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>