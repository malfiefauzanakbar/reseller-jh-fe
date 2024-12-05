<template>
    <LoadingScreen :isVisible="loadingData" />
    <section class="bg-gradient-to-b from-[#F6E2E5] to-[#fff] relative" id="home">
        <div class="container lg:pt-[180px] pt-10 z-10 relative lg:h-[600px] lg:flex">
            <div class="lg:w-5/12 lg:order-2 flex items-center justify-center">
                <nuxt-img src="/images/talent/home.webp" class="lg:absolute lg:bottom-12 lg:right-14 z-0 lg:w-[600px] w-[300px]"
                    title="talent" alt="talent" loading="lazy" />
            </div>
            <div class="lg:w-7/12">
                <div class="lg:shadow-lg shadow-md rounded-3xl lg:p-8 p-4">
                    <h1 class="lg:text-5xl text-3xl font-bold lg:text-start text-center text-primaryColor lg:leading-[50px]">
                        Daftar Program Reseller Jims Honey Sekarang Juga
                    </h1>
                    <p class="lg:mt-5 mt-2   text-gray-600 lg:text-base text-sm lg:text-start text-center">
                        Mulai bisnis fashion dari sekarang dan rasakan keuntungannya di masa mendatang bersama Jims
                        Honey!
                    </p>
                    <div class="mt-6 lg:text-start text-center lg:mb-0 mb-2">
                        <button @click.prevent="scrollToSection('register')"
                            class="bg-primaryColor lg:px-6 px-4 lg:py-3 py-2 rounded-lg lg:font-medium shadow-md shadow-gray-300 transition-all text-white">
                            <client-only>
                                <font-awesome-icon :icon="['fas', 'file-import']" class="text-[18px] mr-1.5" />
                            </client-only>
                            Daftar Sekarang
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="relative" id="information">
        <div class="container mt-10">
            <div class="flex items-center justify-center text-center">
                <h2 class="lg:text-3xl text-xl font-bold lg:w-1/2 text-primaryColor">
                    5 Alasan Harus Bergabung Menjadi Reseller Jims Honey
                </h2>
            </div>
            <div class="max-w-5xl mx-auto lg:py-10 py-6 lg:mt-6">
                <div class="relative">
                    <div class="absolute left-1/2 transform -translate-x-1/2 h-full flex flex-col items-center">
                        <div class="lg:h-44 h-16"></div>
                        <div class="flex-1 border-l-[1px] border-dashed border-gray-300"></div>
                        <div class="lg:h-44 h-16"></div>
                    </div>
                    <div class="relative flex items-center mb-0">
                        <div class="w-1/2 lg:pr-14 pr-6 lg:py-0 py-2">
                            <carousel :autoplay="3000" :wrap-around="true">
                                <slide v-for="(review, index) in reviews" :key="index">
                                    <NuxtImg :src="review.img" priority format="webp" class="w-full lg:rounded-lg rounded-md" alt="Customer Review"
                                        title="Customer Review" />
                                </slide>
                                <template #addons>
                                    <pagination class="custom-pagination" />
                                </template>
                            </carousel>
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
                            <carousel :autoplay="3000" :wrap-around="true">
                                <slide v-for="(product, index) in products" :key="index">
                                    <NuxtImg :src="product.img" priority format="webp" class="w-full lg:rounded-lg rounded-md" alt="Product"
                                        title="Product" />
                                </slide>
                                <template #addons>
                                    <pagination class="custom-pagination" />
                                </template>
                            </carousel>
                        </div>
                        <div class="w-1/2 lg:pr-14 pr-6 lg:py-0 py-2">
                            <p class="text-gray-800 lg:text-lg text-xs">
                                Berhasil menjual produk berkualitas dengan harga yang terjangkau.
                            </p>
                        </div>
                        <div
                            class="absolute left-1/2 transform -translate-x-1/2 bg-primaryColor text-white lg:w-8 lg:h-8 w-6 h-6 rounded-full flex items-center justify-center lg:font-semibold font-normal text-sm shadow-sm z-10">
                            2
                        </div>
                    </div>

                    <div class="relative flex items-center mb-0">
                        <div class="w-1/2 lg:pr-14 pr-6 lg:py-0 py-2">
                            <nuxt-img src="/images/shegan.webp" class="w-full rounded-lg" width="" title="shegan" alt="shegan"
                                loading="lazy" />
                        </div>
                        <div class="w-1/2 lg:pl-14 pl-6">
                            <p class="text-gray-800 lg:text-lg text-xs">
                                Menyediakan tas dengan design yang up-to-date mengikuti minat masyarakat Indonesia.
                            </p>
                        </div>
                        <div
                            class="absolute left-1/2 transform -translate-x-1/2 bg-primaryColor text-white lg:w-8 lg:h-8 w-6 h-6 rounded-full flex items-center justify-center lg:font-semibold font-normal text-sm shadow-sm z-10">
                            3
                        </div>
                    </div>

                    <div class="relative flex items-center mb-0 flex-row-reverse">
                        <div class="w-1/2 lg:pl-14 pl-6">
                            <nuxt-img src="/images/grafik.webp" class="w-full rounded-lg" width="" title="Grafik" alt="Grafik"
                                loading="lazy" />
                        </div>
                        <div class="w-1/2 lg:pr-14 pr-6 lg:py-0 py-2">
                            <p class="text-gray-800 lg:text-lg text-xs">
                                Hanya dengan minimal belanja <span class="line-through">Rp1.000.000</span> <span
                                class="font-medium">Rp500.000</span> seller sudah bisa mendapat proyeksi keuntungan hingga 10% - 30%.
                            </p>
                        </div>
                        <div
                            class="absolute left-1/2 transform -translate-x-1/2 bg-primaryColor text-white lg:w-8 lg:h-8 w-6 h-6 rounded-full flex items-center justify-center lg:font-semibold font-normal text-sm shadow-sm z-10">
                            4
                        </div>
                    </div>

                    <div class="relative flex items-center">
                        <div class="w-1/2 lg:pr-14 pr-6 lg:py-0 py-2">
                            <nuxt-img src="/images/colaboration.webp" class="w-full rounded-lg" width="" title="Tya Ariestya" alt="Tya Ariestya"
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
                <h2 class="lg:text-3xl text-xl font-bold lg:w-1/2 text-primaryColor">
                    Beberapa Artis yang Pernah Bekerjasama
                </h2>
            </div>
            <div class="lg:mt-10">
                <Carousel :autoplay="3000" v-bind="config">
                    <Slide v-for="(talent, index) in talents" :key="index">
                        <div class="carousel__item">
                            <div
                                class="overflow-hidden cursor-pointer lg:rounded-xl rounded-md relative group lg:mt-0 mt-6">
                                <div
                                    class="lg:rounded-xl rounded-md z-20 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end lg:w-full lg:h-[250px]">
                                    <div>
                                        <div
                                            class="lg:p-6 p-4 space-y-3 lg:text-xl text-sm group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transform transition duration-300 ease-in-out">
                                            <div class="font-normal">{{ talent.name }}</div>
                                        </div>
                                    </div>
                                </div>
                                <nuxt-img class="w-full group-hover:scale-110 transition duration-300 ease-in-out"
                                    :src="talent.img" :title="talent.name" :alt="talent.name" />
                            </div>
                        </div>
                    </Slide>
    
                    <template #addons>
                        <Navigation class="nav-custom" />
                    </template>
                </Carousel>
            </div>
        </div>
        <div class="container lg:mt-20 mt-4">
            <div class="lg:flex items-center justify-center lg:mt-10 mt-6">
                <div class="lg:w-11/12">
                    <h2 class="lg:text-3xl text-xl font-bold text-primaryColor text-center">
                        Jims Honey Sudah Tersebar di Seluruh Indonesia
                    </h2>
                    <div class="lg:mt-16 mt-6">
                        <nuxt-img src="/images/maps.webp" class="w-full" width="" title="maps" alt="maps"
                            loading="lazy" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="lg:mt-20 mt-10" id="register">
        <div class="container">
            <div class="flex items-center justify-center text-center">
                <h2 class="lg:text-3xl text-xl font-bold lg:w-1/2 text-primaryColor">
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
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import { useScrollToSection } from '~/composables/useScrollToSection';
import { ref, onMounted, watch } from 'vue';
import RegisSection from './form/RegisSection.vue';
import LoadingScreen from './LoadingScreen.vue';
import { useIsMobile } from '~/composables/useIsMobile'

const { scrollToSection } = useScrollToSection();
const { isMobile } = useIsMobile()
console.log(isMobile, 'isMobile')
console.log(isMobile.value, 'isMobile')
const reviews = [
    { img: '/images/customer/1.webp' },
    { img: '/images/customer/2.webp' },
    { img: '/images/customer/3.webp' },
];

const products = [
    { img: '/images/product/1.webp' },
    { img: '/images/product/2.webp' },
    { img: '/images/product/3.webp' },
    { img: '/images/product/4.webp' },
    { img: '/images/product/5.webp' },
    { img: '/images/product/6.webp' },
];
const config = reactive({
  itemsToShow: 3,
  wrapAround: true,
  transition: 500,
});

watch(isMobile, (newValue) => {
  config.itemsToShow = newValue ? 2 : 3;
});

const talents = [
    { img: '/images/talent/1.webp', name: 'Cynthia Wijaya' },
    { img: '/images/talent/2.webp', name: 'Eriska Rein' },
    { img: '/images/talent/3.webp', name: 'Cut Ratu Meyriska' },
    { img: '/images/talent/4.webp', name: 'Tya Ariestya' },
    { img: '/images/talent/5.webp', name: 'Sabrina Chairunnisa' },
];

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
.custom-pagination {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.5;
  transform: rotateY(-10deg) scale(0.8);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(10deg) scale(0.8);
}

.carousel__slide--prev {
  opacity: 0.5;
  transform: rotateY(-10deg) scale(0.80);
}

.carousel__slide.carousel__slide--next {
  opacity: 0.5;
  transform: rotateY(10deg) scale(0.80);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1);
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

    .custom-pagination {
        bottom: 5px;
    }
}
</style>