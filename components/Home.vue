<template>
    <LoadingScreen :isVisible="loadingData" />
    <section class="bg-gradient-to-b from-[#F6E2E5] to-[#fff] relative" id="home">
        <div class="container lg:pt-[150px] pt-20 z-10 relative lg:h-[600px]">
            <div class="lg:w-7/12">
                <h1 class="lg:text-6xl text-4xl font-bold lg:text-start text-center text-primaryColor">
                    Daftar Program Reseller Jims Honey Sekarang Juga
                </h1>
                <p class="mt-5 text-gray-600 lg:text-base text-sm lg:text-start text-center lg:w-2/3">
                    Mulai bisnis fashion dari sekarang dan rasakan keuntungannya di masa mendatang bersama Jims
                    Honey!
                </p>
                <div class="lg:mt-10 mt-4 lg:text-start text-center">
                    <button @click.prevent="scrollToSection('register')"
                        class="bg-primaryColor lg:px-6 px-4 lg:py-4 py-2 rounded-lg lg:font-medium shadow-md shadow-gray-300 transition-all text-white">
                        <client-only>
                            <font-awesome-icon :icon="['fas', 'file-import']" class="text-[18px] mr-1.5" />
                        </client-only>
                        Daftar Sekarang
                    </button>
                </div>
            </div>
            <nuxt-img src="/images/talent.png" class="absolute bottom-0 right-0 z-0 lg:block hidden" width="600"
                title="talent" alt="talent" loading="lazy" />
            <button
                class="w-11 h-11 bg-white hover:bg-gray-50 border border-gray-200 lg:flex items-center justify-center rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce hidden"
                @click.prevent="scrollToSection('information')">
                <client-only>
                    <font-awesome-icon :icon="['fas', 'angles-down']" class="text-[20px]" />
                </client-only>
            </button>
        </div>
    </section>
    <section class="relative" id="information">
        <div class="container lg:mt-16 mt-10">
            <div class="flex items-center justify-center text-center">
                <h2 class="lg:text-4xl text-xl font-bold lg:w-1/2 text-primaryColor">
                    5 Alasan Harus Bergabung Menjadi Reseller Jims Honey
                </h2>
            </div>
            <div class="max-w-5xl mx-auto lg:py-10 py-6 lg:mt-6">
                <div class="relative">
                    <div class="absolute left-1/2 transform -translate-x-1/2 h-full flex flex-col items-center">
                        <div class="lg:h-40 h-16"></div>
                        <div class="flex-1 border-l-[1px] border-dashed border-gray-300"></div>
                        <div class="lg:h-40 h-16"></div>
                    </div>
                    <div class="relative flex items-center mb-0">
                        <div class="w-1/2 lg:pr-14 pr-6 lg:py-0 py-2">
                            <nuxt-img src="/images/timeline.png" class="w-full" width="" title="timeline" alt="timeline"
                                loading="lazy" />
                        </div>
                        <div class="w-1/2 lg:pl-14 pl-6">
                            <p class="text-gray-800 lg:text-lg text-xs">
                                Jims Honey sudah 10 tahun berkomitmen di industri tas dan kulit sintetis.
                            </p>
                        </div>
                        <div
                            class="absolute left-1/2 transform -translate-x-1/2 bg-primaryColor text-white lg:w-8 lg:h-8 w-6 h-6 rounded-full flex items-center justify-center lg:font-semibold font-normal text-sm shadow-sm z-10">
                            1
                        </div>
                    </div>

                    <div class="relative flex items-center mb-0 flex-row-reverse">
                        <div class="w-1/2 lg:pl-14 pl-6">
                            <nuxt-img src="/images/timeline.png" class="w-full" width="" title="timeline" alt="timeline"
                                loading="lazy" />
                        </div>
                        <div class="w-1/2 lg:pr-14 pr-6 lg:py-0 py-2">
                            <p class="text-gray-800 lg:text-lg text-xs">
                                Berhasil menjual produk berkualitas dengan harga yang terjangkau dan design up-to-date
                                mengikuti minat masyarakat Indonesia.
                            </p>
                        </div>
                        <div
                            class="absolute left-1/2 transform -translate-x-1/2 bg-primaryColor text-white lg:w-8 lg:h-8 w-6 h-6 rounded-full flex items-center justify-center lg:font-semibold font-normal text-sm shadow-sm z-10">
                            2
                        </div>
                    </div>

                    <div class="relative flex items-center mb-0">
                        <div class="w-1/2 lg:pr-14 pr-6 lg:py-0 py-2">
                            <nuxt-img src="/images/timeline.png" class="w-full" width="" title="timeline" alt="timeline"
                                loading="lazy" />
                        </div>
                        <div class="w-1/2 lg:pl-14 pl-6">
                            <p class="text-gray-800 lg:text-lg text-xs">
                                Hanya dengan minimal belanja <span class="line-through">1.000.000</span> <span
                                    class="font-medium">Rp500.000</span>
                                seller sudah bisa mendapat proyeksi keuntungan hingga 10% - 30%.
                            </p>
                        </div>
                        <div
                            class="absolute left-1/2 transform -translate-x-1/2 bg-primaryColor text-white lg:w-8 lg:h-8 w-6 h-6 rounded-full flex items-center justify-center lg:font-semibold font-normal text-sm shadow-sm z-10">
                            3
                        </div>
                    </div>

                    <div class="relative flex items-center mb-0 flex-row-reverse">
                        <div class="w-1/2 lg:pl-14 pl-6">
                            <nuxt-img src="/images/timeline.png" class="w-full" width="" title="timeline" alt="timeline"
                                loading="lazy" />
                        </div>
                        <div class="w-1/2 lg:pr-14 pr-6 lg:py-0 py-2">
                            <p class="text-gray-800 lg:text-lg text-xs">
                                Sebagai local brand yang menjual tas berkualitas Internasional, Jims Honey sudah membuka
                                puluhan toko offline dan ratusan seller di seluruh Indonesia.
                            </p>
                        </div>
                        <div
                            class="absolute left-1/2 transform -translate-x-1/2 bg-primaryColor text-white lg:w-8 lg:h-8 w-6 h-6 rounded-full flex items-center justify-center lg:font-semibold font-normal text-sm shadow-sm z-10">
                            4
                        </div>
                    </div>

                    <div class="relative flex items-center">
                        <div class="w-1/2 lg:pr-14 pr-6 lg:py-0 py-2">
                            <nuxt-img src="/images/timeline.png" class="w-full" width="" title="timeline" alt="timeline"
                                loading="lazy" />
                        </div>
                        <div class="w-1/2 lg:pl-14 pl-6">
                            <p class="text-gray-800 lg:text-lg text-xs">
                                Jims Honey telah berkolaborasi dengan artis dan influencer tanah air.
                            </p>
                        </div>
                        <div
                            class="absolute left-1/2 transform -translate-x-1/2 bg-primaryColor text-white lg:w-8 lg:h-8 w-6 h-6 rounded-full flex items-center justify-center lg:font-semibold font-normal text-sm shadow-sm z-10">
                            5
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container lg:mt-16 mt-4 relative">
            <div class="flex items-center justify-center text-center">
                <h2 class="lg:text-4xl text-xl font-bold lg:w-1/2 text-primaryColor">
                    Beberapa Artis yang Pernah Bekerjasama
                </h2>
            </div>
            <div class="lg:flex items-center justify-center lg:mt-10 mt-6">
                <div class="lg:w-10/12">
                    <div class="lg:flex items-center justify-center gap-6">
                        <div
                            class="overflow-hidden cursor-pointer lg:rounded-xl rounded-md relative group lg:w-[320px] lg:h-[250px]">
                            <div
                                class="lg:rounded-xl rounded-md z-20 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                                <div>
                                    <div
                                        class="lg:p-6 p-4 space-y-3 lg:text-xl text-sm group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transform transition duration-300 ease-in-out">
                                        <div class="font-normal">Cynthia Wijaya</div>
                                    </div>
                                </div>
                            </div>
                            <nuxt-img class="w-full group-hover:scale-110 transition duration-300 ease-in-out"
                                width="320" height="250" src="/images/sample.webp" title="talent" alt="talent" />
                        </div>
                        <div
                            class="overflow-hidden cursor-pointer lg:rounded-xl rounded-md relative group lg:w-[320px] lg:h-[250px] lg:mt-0 mt-6">
                            <div
                                class="lg:rounded-xl rounded-md z-20 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                                <div>
                                    <div
                                        class="lg:p-6 p-4 space-y-3 lg:text-xl text-sm group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transform transition duration-300 ease-in-out">
                                        <div class="font-normal">Cynthia Wijaya</div>
                                    </div>
                                </div>
                            </div>
                            <nuxt-img class="w-full group-hover:scale-110 transition duration-300 ease-in-out"
                                width="320" height="250" src="/images/sample.webp" title="talent" alt="talent" />
                        </div>
                        <div
                            class="overflow-hidden cursor-pointer lg:rounded-xl rounded-md relative group lg:w-[320px] lg:h-[250px] lg:mt-0 mt-6">
                            <div
                                class="lg:rounded-xl rounded-md z-20 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                                <div>
                                    <div
                                        class="lg:p-6 p-4 space-y-3 lg:text-xl text-sm group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transform transition duration-300 ease-in-out">
                                        <div class="font-normal">Cynthia Wijaya</div>
                                    </div>
                                </div>
                            </div>
                            <nuxt-img class="w-full group-hover:scale-110 transition duration-300 ease-in-out"
                                width="320" height="250" src="/images/sample.webp" title="talent" alt="talent" />
                        </div>
                    </div>
                    <div class="lg:flex items-center justify-center gap-6 mt-6">
                        <div
                            class="overflow-hidden cursor-pointer lg:rounded-xl rounded-md relative group lg:w-[320px] lg:h-[250px] lg:mt-0 mt-6">
                            <div
                                class="lg:rounded-xl rounded-md z-20 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                                <div>
                                    <div
                                        class="lg:p-6 p-4 space-y-3 lg:text-xl text-sm group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transform transition duration-300 ease-in-out">
                                        <div class="font-normal">Cynthia Wijaya</div>
                                    </div>
                                </div>
                            </div>
                            <nuxt-img class="w-full group-hover:scale-110 transition duration-300 ease-in-out"
                                width="320" height="250" src="/images/sample.webp" title="talent" alt="talent" />
                        </div>
                        <div
                            class="overflow-hidden cursor-pointer lg:rounded-xl rounded-md relative group lg:w-[320px] lg:h-[250px] lg:mt-0 mt-6">
                            <div
                                class="lg:rounded-xl rounded-md z-20 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                                <div>
                                    <div
                                        class="lg:p-6 p-4 space-y-3 lg:text-xl text-sm group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transform transition duration-300 ease-in-out">
                                        <div class="font-normal">Cynthia Wijaya</div>
                                    </div>
                                </div>
                            </div>
                            <nuxt-img class="w-full group-hover:scale-110 transition duration-300 ease-in-out"
                                width="320" height="250" src="/images/sample.webp" title="talent" alt="talent" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container lg:mt-16 mt-4">
            <div class="lg:flex items-center justify-center lg:mt-10 mt-6">
                <div class="lg:w-10/12">
                    <h2 class="lg:text-4xl text-xl font-bold text-primaryColor text-center">
                        Jims Honey Sudah Tersebar di Seluruh Indonesia
                    </h2>
                    <div class="bg-gray-50 rounded-xl lg:mt-10 mt-6">
                        <nuxt-img src="/images/maps.png" class="w-full" width="" title="maps" alt="maps"
                            loading="lazy" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="lg:mt-20 mt-10" id="register">
        <div class="container">
            <div class="flex items-center justify-center text-center">
                <h2 class="lg:text-4xl text-xl font-bold lg:w-1/2 text-primaryColor">
                    Yuk Bergabung jadi Reseller Jims Honey
                </h2>
            </div>
            <div class="flex items-center justify-center lg:mt-10 mt-4">
                <RegisSection />
            </div>
        </div>
    </section>
</template>

<script setup>
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import { useScrollToSection } from '~/composables/useScrollToSection';
import { ref, onMounted } from 'vue';
import RegisSection from './form/RegisSection.vue';
import LoadingScreen from './LoadingScreen.vue';

const { scrollToSection } = useScrollToSection();

const talents = [
    { image: '/images/sample.webp', name: 'Cynthia Wijaya' },
    { image: '/images/sample.webp', name: 'Eriska Rein' },
    { image: '/images/sample.webp', name: 'Cut Ratu Meyriska' },
    { image: '/images/sample.webp', name: 'Tya Ariestya' },
    { image: '/images/sample.webp', name: 'Sabrina Chairunnisa' },
];

const settings = ref({
    itemsToShow: 1,
    snapAlign: 'start',
})

const breakpoints = ref({
    400: {
        itemsToShow: 1,
        snapAlign: 'center',
    },
    1024: {
        itemsToShow: 3,
        snapAlign: 'start',
    },
})

const loadingData = ref(true)

onMounted(() => {
    setTimeout(() => {
        loadingData.value = false
    }, 1000);
});
</script>

<style scoped lang="scss">
.shadow-pink {
    box-shadow: 17px 21px 0px 0 #F9EBEC;
}

.slider-item {
    & img {
        border-radius: 10px;
    }

    & .carousel__slide {
        padding: 10px;
    }
}

@media only screen and (max-width: 768px) {
    .slider-item {
        & .carousel__slide {
            padding: 0px;
        }
    }

    .shadow-modal {
        box-shadow: unset;
    }
}
</style>