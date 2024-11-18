<template>
    <section class="bg-gradient-to-b from-[#F6E2E5] to-[#fff] relative" id="home">
        <div class="container lg:pt-[200px] pt-20 z-10 relative">
            <nuxt-img src="/images/butterfly.webp" class="absolute right-[500px] lg:block hidden" title="" alt=""
                loading="lazy" />
            <div class="lg:grid grid-cols-3">
                <div class="col-span-2">
                    <h1 class="lg:text-6xl text-4xl font-bold lg:text-left text-center">
                        <span class=" lg:block">Pendaftaran</span>
                        <span class="lg:block lg:mt-1 ">
                            Reseller <span class="bg-[#E8B5BA] inline-block p-0">Jims Honey</span>
                        </span>
                    </h1>
                    <p class="mt-5 text-gray-600 lg:text-start text-center">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur cupiditate, ipsam labore id
                        aut veniam numquam, quidem obcaecati temporibus
                    </p>
                    <div class="mb-6 lg:mt-12 mt-6">
                        <div
                            class="bg-white px-4 py-2.5 lg:w-56 w-full border-b-2 border-[#E8B5BA] rounded-t-lg text-[#E8B5BA] font-medium text-center">
                            Daftar Reseller
                        </div>
                        <div
                            class="bg-white lg:p-6 p-4 shadow-[5px_7px_21px_-3px_rgba(0,_0,_0,_0.1)] rounded-b-lg lg:rounded-tr-lg">
                            <div class="lg:flex gap-4">
                                <div class="flex lg:w-[250px]">
                                    <label for="upload"
                                        class="flex flex-col items-center justify-center w-full h-44 rounded-lg border-2 border-dashed border-[#E8B5BA] bg-[#F8E9EA] text-center cursor-pointer">
                                        <div class="text-pink-300 mb-4">
                                            <client-only>
                                                <font-awesome-icon :icon="['fa', 'plus-circle']"
                                                    class="text-3xl text-[#E8B5BA]" />
                                            </client-only>
                                        </div>
                                        <p class="text-black font-medium">Upload KTP</p>
                                        <p class="text-gray-500">Note: max 2 mb</p>
                                        <input type="file" id="upload" class="hidden" />
                                    </label>
                                </div>
                                <div class="w-full lg:mt-0 mt-3">
                                    <div class="lg:grid grid-cols-2 gap-4">
                                        <div class="relative">
                                            <input type="text" id="floating_name" autocomplete="off"
                                                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                                placeholder="" />
                                            <label for="floating_name"
                                                class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                                Nama Lengkap
                                            </label>
                                        </div>
                                        <div class="relative lg:mt-0 mt-3">
                                            <input type="text" id="floating_wa" autocomplete="off"
                                                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                                placeholder="" />
                                            <label for="floating_wa"
                                                class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                                No Whatsapp
                                            </label>
                                        </div>
                                        <div class="relative lg:mt-0 mt-3">
                                            <input type="email" id="floating_email" autocomplete="off"
                                                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                                placeholder="" />
                                            <label for="floating_email"
                                                class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                                Email
                                            </label>
                                        </div>
                                        <div class="relative lg:mt-0 mt-3">
                                            <input type="text" id="floating_nik" autocomplete="off"
                                                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                                placeholder="" />
                                            <label for="floating_nik"
                                                class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                                NIK
                                            </label>
                                        </div>
                                    </div>
                                    <div class="relative mt-4">
                                        <input type="text" id="floating_address" autocomplete="off"
                                            class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            placeholder="" />
                                        <label for="floating_address"
                                            class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                            Alamat
                                        </label>
                                    </div>
                                    <div class="mt-4">
                                        <button
                                            class="bg-[#E8B5BA] w-full py-3 rounded-lg font-medium shadow-md shadow-gray-300 text-white">Kirim
                                            Data</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <nuxt-img src="/images/talent.webp" class="absolute bottom-0 right-0 z-0 lg:block hidden" width="550" title=""
            alt="" loading="lazy" />
    </section>
    <section class="relative" id="journey">
        <nuxt-img src="/images/daun-1.webp" class="absolute lg:block hidden left-0 top-0 " width="100" title="" alt=""
            loading="lazy" />
        <nuxt-img src="/images/butterfly-1.webp" class="absolute lg:block hidden left-[140px] top-0" width="70" title="" alt=""
            loading="lazy" />
        <div class="container lg:mt-16 mt-10">
            <h2 class="text-3xl font-bold text-center">
                Journey Jims Honey
            </h2>
            <div class="flex items-center justify-center">
                <p class="text-center mt-3 text-[#737373] lg:w-[600px] font-light">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere vel venenatis eu sit massa
                    volutpat.
                </p>
            </div>
            <div class="slider-item mt-6">
                <Carousel v-bind="settings" :breakpoints="breakpoints">
                    <Slide v-for="(slide, index) in journeys" :key="index">
                        <div class="border border-black rounded-xl">
                            <img :src="slide.image" />
                            <div class="text-center p-4">
                                <h3 class="text-lg font-medium">Embracing Sustainability</h3>
                                <p class="mt-2 text-sm font-light">
                                    Build beautiful landing pages in record time with Landing Page UI kit for Figma. No
                                    code required!
                                </p>
                            </div>
                        </div>
                    </Slide>
                    <template #addons>
                        <Navigation class="custom" />
                    </template>
                </Carousel>
            </div>
        </div>
        <div class="container lg:mt-16 mt-10 relative">
            <nuxt-img src="/images/butterfly-3.webp" class="absolute lg:block hidden right-0 top-0" title="" alt="" loading="lazy" />
            <h2 class="text-3xl font-bold text-center">
                Video Jims Honey
            </h2>
            <div class="flex justify-center items-center">
                <p class="mt-3 text-[#737373] lg:w-[600px] font-light text-center">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere vel venenatis eu sit massa
                    volutpat.
                </p>
            </div>
            <div class="flex items-center justify-center">
                <div class="bg-[#E8B5BA] rounded-2xl shadow-pink mt-6 w-[500px]">
                    <video class="w-full rounded-2xl aspect-[16/10] object-cover" controls preload="auto" poster="/images/store.webp">
                        <source src="/videos/video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
        <div class="container lg:mt-16 mt-14 relative">
            <nuxt-img src="/images/butterfly-1.webp" class="absolute lg:block hidden lg:left-0 lg:top-[20px]" width="70" title="" alt=""
                loading="lazy" />
            <h2 class="text-3xl font-bold text-center">
                Store Jims Honey Indonesia
            </h2>
            <div class="flex items-center justify-center">
                <p class="text-center mt-3 text-[#737373] lg:w-[600px] font-light">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere vel venenatis eu sit massa
                    volutpat.
                </p>
            </div>
            <div class="slider-item mt-6">
                <Carousel v-bind="settings" :breakpoints="breakpoints">
                    <Slide v-for="(store, index) in stores" :key="index">
                        <div class="relative">
                            <div class="after rounded-xl">
                                <img :src="store.image" />
                            </div>
                        </div>
                        <div class="z-10 absolute text-white underline bottom-3 p-6">
                            Jims Honey Jakarta
                        </div>
                    </Slide>
                    <template #addons>
                        <Navigation class="custom" />
                    </template>
                </Carousel>
            </div>
        </div>
        <div class="container lg:mt-16 mt-10 relative">
            <nuxt-img src="/images/butterfly-1.webp" class="absolute lg:block hidden left-[350px] -bottom-[70px]" width="50" title=""
                alt="" loading="lazy" />
            <nuxt-img src="/images/daun-2.webp" class="absolute lg:block hidden -right-[80px] -top-[120px] z-0" width="350" title=""
                alt="" loading="lazy" />
            <h2 class="text-3xl font-bold text-center">
                Reseller Tier
            </h2>
            <div class="flex items-center justify-center">
                <p class="text-center mt-3 text-[#737373] lg:w-[600px] font-light">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere vel venenatis eu sit massa
                    volutpat.
                </p>
            </div>
            <div class="lg:grid grid-cols-4 gap-4 mt-6 z-10 relative">
                <div class="bg-[#E8B5BA] rounded-xl p-6 shadow-md shadow-gray-300">
                    <div class="flex items-center gap-4">
                        <div class="w-14 h-14 bg-white rounded-xl flex items-center justify-center p-2">
                            <nuxt-img src="/images/rubby.webp" title="" alt="" loading="lazy" />
                        </div>
                        <div>
                            <p>
                                Recommended
                            </p>
                            <h3 class="font-semibold text-lg">
                                Ruby
                            </h3>
                        </div>
                    </div>
                    <p class="lg:mt-6 mt-3 text-sm">
                        Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit.
                    </p>
                    <h2 class="text-3xl mt-6 font-bold">
                        Rp.500.000
                    </h2>
                    <div class="lg:mt-20 mt-6">
                        <button class="bg-white rounded-full py-3.5 w-full font-medium">
                            Vew Detail
                        </button>
                    </div>
                </div>
                <div class="bg-white border border-[#E5EAEE] rounded-xl p-6 lg:mt-0 mt-4">
                    <div class="flex items-center gap-4">
                        <div class="w-14 h-14 bg-[#F2F4F6] rounded-xl flex items-center justify-center p-2">
                            <nuxt-img src="/images/silver.webp" title="" alt="" loading="lazy" />
                        </div>
                        <div>
                            <p>
                                For individuals
                            </p>
                            <h3 class="font-semibold text-lg">
                                Silver
                            </h3>
                        </div>
                    </div>
                    <p class="lg:mt-6 mt-3 text-sm">
                        Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit.
                    </p>
                    <h2 class="text-3xl mt-6 font-bold">
                        Rp.800.000
                    </h2>
                    <div class="lg:mt-20 mt-6">
                        <button class="bg-white border border-[#E8B5BA] rounded-full py-3.5 w-full font-medium">
                            Vew Detail
                        </button>
                    </div>
                </div>
                <div class="bg-white border border-[#E5EAEE] rounded-xl p-6 lg:mt-0 mt-4">
                    <div class="flex items-center gap-4">
                        <div class="w-14 h-14 bg-[#FDF0D5] rounded-xl flex items-center justify-center p-2">
                            <nuxt-img src="/images/gold.webp" title="" alt="" loading="lazy" />
                        </div>
                        <div>
                            <p>
                                For individuals
                            </p>
                            <h3 class="font-semibold text-lg">
                                Gold
                            </h3>
                        </div>
                    </div>
                    <p class="lg:mt-6 mt-3 text-sm">
                        Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit.
                    </p>
                    <h2 class="text-3xl mt-6 font-bold">
                        Rp.800.000
                    </h2>
                    <div class="lg:mt-20 mt-6">
                        <button class="bg-white border border-[#E8B5BA] rounded-full py-3.5 w-full font-medium">
                            Vew Detail
                        </button>
                    </div>
                </div>
                <div class="bg-white border border-[#E5EAEE] rounded-xl p-6 lg:mt-0 mt-4">
                    <div class="flex items-center gap-4">
                        <div class="w-14 h-14 bg-[#E5F4F8] rounded-xl flex items-center justify-center p-2">
                            <nuxt-img src="/images/diamond.webp" title="" alt="" loading="lazy" />
                        </div>
                        <div>
                            <p>
                                For individuals
                            </p>
                            <h3 class="font-semibold text-lg">
                                Diamond
                            </h3>
                        </div>
                    </div>
                    <p class="lg:mt-6 mt-3 text-sm">
                        Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit.
                    </p>
                    <h2 class="text-3xl mt-6 font-bold">
                        Rp.800.000
                    </h2>
                    <div class="lg:mt-20 mt-6">
                        <button class="bg-white border border-[#E8B5BA] rounded-full py-3.5 w-full font-medium">
                            Vew Detail
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="lg:mt-16 mt-10" id="fasilitas">
        <div class="container relative">
            <nuxt-img src="/images/butterfly-1.webp" class="absolute lg:block hidden left-[100px] top-0" title="" alt=""
                loading="lazy" />
            <h2 class="text-3xl font-bold text-center">
                Fasilitas
            </h2>
            <div class="flex items-center justify-center">
                <p class="text-center mt-3 text-[#737373] lg:w-[600px] font-light">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere vel venenatis eu sit massa
                    volutpat.
                </p>
            </div>
            <div class="grid lg:grid-cols-4 grid-cols-2 gap-4 mt-6">
                <div class="border border-black rounded-xl lg:p-4 p-2" v-for="(fasility, index) in fasilities" :key="index">
                    <nuxt-img :src="fasility.image" class="rounded-xl" title="" alt="" loading="lazy" />
                    <div class="text-center mt-3">
                        <h3 class="lg:text-md text-sm font-medium">
                            {{ fasility.title }}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="lg:mt-16 mt-10" id="biaya-flow">
        <div class="container relative">
            <nuxt-img src="/images/butterfly-3.webp" class="absolute lg:block hidden right-0 top-0" title="" alt="" loading="lazy" />
            <div class="lg:grid grid-cols-3 gap-16">
                <div class=" bg-[#E8B5BA] rounded-2xl p-6 relative z-10 shadow-pink">
                    <h2 class="text-xl font-medium">
                        <span class="bg-white inline-block px-2 rounded-sm">
                            Promo Spesial
                        </span>
                    </h2>
                    <h2 class="mt-6 text-xl line-through text-gray-700">
                        Rp1.000.000
                    </h2>
                    <h2 class="text-5xl font-extrabold mt-4">
                        Rp500.000
                    </h2>
                    <p class="text-xs mt-2">
                        Khusus untuk Kamu yang Daftar Hari Ini
                    </p>
                    <div class="lg:mt-16 mt-6">
                        <button class="bg-transparent border border-black rounded-lg py-3.5 px-9 text-black"
                            @click.prevent="scrollToSection('home')">
                            Dapatkan Harga Promo
                        </button>
                    </div>
                    <p class="mt-3 text-xs">
                        *biaya pendaftaran dapat berubah sewaktu-waktu
                    </p>
                </div>
                <div class="col-span-2 lg:mt-0 mt-12">
                    <h2 class="text-3xl font-bold">
                        Cara Mendaftar
                    </h2>
                    <div class="flex items-center gap-4 mt-6">
                        <div
                            class="w-12 h-12 rounded-lg bg-[#EECACD] flex items-center justify-center font-medium text-xl">
                            1
                        </div>
                        <div>
                            <h3 class="text-lg font-medium">
                                Mengisi Form Pendaftaran
                            </h3>
                            <p class="font-light text-sm">
                                Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit.
                            </p>
                        </div>
                    </div>
                    <div class="flex items-center gap-4 mt-6">
                        <div
                            class="w-12 h-12 rounded-lg bg-[#EECACD] flex items-center justify-center font-medium text-xl">
                            2
                        </div>
                        <div>
                            <h3 class="text-lg font-medium">
                                Menunggu Admin Menghubungi
                            </h3>
                            <p class="font-light text-sm">
                                Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit.
                            </p>
                        </div>
                    </div>
                    <div class="flex items-center gap-4 mt-6">
                        <div
                            class="w-12 h-12 rounded-lg bg-[#EECACD] flex items-center justify-center font-medium text-xl">
                            3
                        </div>
                        <div>
                            <h3 class="text-lg font-medium">
                                Registrasi dan Order
                            </h3>
                            <p class="font-light text-sm">
                                Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit.
                            </p>
                        </div>
                    </div>
                    <div class="flex items-center gap-4 mt-6">
                        <div
                            class="w-12 h-12 rounded-lg bg-[#EECACD] flex items-center justify-center font-medium text-xl">
                            4
                        </div>
                        <div>
                            <h3 class="text-lg font-medium">
                                Verifikasi Reseller Tier
                            </h3>
                            <p class="font-light text-sm">
                                Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit.
                            </p>
                        </div>
                    </div>
                    <div class="flex items-center gap-4 mt-6">
                        <div
                            class="w-12 h-12 rounded-lg bg-[#EECACD] flex items-center justify-center font-medium text-xl">
                            5
                        </div>
                        <div>
                            <h3 class="text-lg font-medium">
                                Berkomitmen Memenuhi Target
                            </h3>
                            <p class="font-light text-sm">
                                Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- MODAL -->
    <div v-if="isOpenModal" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 lg:p-0 p-2">
        <div class="bg-white lg:rounded-3xl rounded-xl shadow-lg lg:p-6 p-4 max-w-2xl w-full shadow-modal">
            <div class="flex">
                <div>
                    <h2 class="text-2xl font-semibold">Daftar Reseller</h2>
                    <p class="font-light text-sm">
                        Daftar sekarang juga dan dapatkan harga spesial!
                    </p>
                </div>
                <div class="ms-auto">
                    <div class="w-10 h-10 bg-gray-100 rounded-full p-2 flex items-center justify-center cursor-pointer shadow-sm" @click="closeModal">
                        <client-only>
                            <font-awesome-icon :icon="['fa', 'xmark']" class="text-xl text-black" />
                        </client-only>
                    </div>
                </div>
            </div>
            <div class="lg:flex gap-4 lg:mt-6 mt-3">
                <div class="flex lg:w-[250px]">
                    <label for="upload"
                        class="flex flex-col items-center justify-center w-full h-44 rounded-lg border-2 border-dashed border-[#E8B5BA] bg-[#F8E9EA] text-center cursor-pointer">
                        <div class="text-pink-300 mb-4">
                            <client-only>
                                <font-awesome-icon :icon="['fa', 'plus-circle']"
                                    class="text-3xl text-[#E8B5BA]" />
                            </client-only>
                        </div>
                        <p class="text-black font-medium">Upload KTP</p>
                        <p class="text-gray-500">Note: max 2 mb</p>
                        <input type="file" id="upload" class="hidden" />
                    </label>
                </div>
                <div class="w-full">
                    <div class="lg:grid grid-cols-2 gap-4">
                        <div class="relative lg:mt-0 mt-3">
                            <input type="text" id="floating_name" autocomplete="off"
                                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder="" />
                            <label for="floating_name"
                                class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                Nama Lengkap
                            </label>
                        </div>
                        <div class="relative lg:mt-0 mt-3">
                            <input type="text" id="floating_wa" autocomplete="off"
                                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder="" />
                            <label for="floating_wa"
                                class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                No Whatsapp
                            </label>
                        </div>
                        <div class="relative lg:mt-0 mt-3">
                            <input type="email" id="floating_email" autocomplete="off"
                                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder="" />
                            <label for="floating_email"
                                class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                Email
                            </label>
                        </div>
                        <div class="relative lg:mt-0 mt-3">
                            <input type="text" id="floating_nik" autocomplete="off"
                                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder="" />
                            <label for="floating_nik"
                                class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                NIK
                            </label>
                        </div>
                    </div>
                    <div class="relative lg:mt-4 mt-3">
                        <input type="text" id="floating_address" autocomplete="off"
                            class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder="" />
                        <label for="floating_address"
                            class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                            Alamat
                        </label>
                    </div>
                    <div class="mt-4">
                        <button
                            class="bg-[#E8B5BA] w-full py-3 rounded-lg font-medium shadow-md shadow-gray-300 text-white">Kirim
                            Data</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import { useScrollToSection } from '~/composables/useScrollToSection';
import { ref, onMounted } from 'vue';

const isOpenModal = ref(false);

onMounted(() => {
    isOpenModal.value = true;
});

function closeModal() {
    isOpenModal.value = false;
    scrollToSection('biaya-flow');
}

const { scrollToSection } = useScrollToSection();
const journeys = [
    { image: '/images/sample.webp' },
    { image: '/images/sample.webp' },
    { image: '/images/sample.webp' },
    { image: '/images/sample.webp' },
];

const stores = [
    { image: '/images/sample.webp' },
    { image: '/images/sample.webp' },
    { image: '/images/sample.webp' },
    { image: '/images/sample.webp' },
];

const fasilities = [
    { image: '/images/sample.webp', title: 'Pelatihan Operational Reseller' },
    { image: '/images/sample.webp', title: 'Materi Promosi' },
    { image: '/images/sample.webp', title: 'Mendapat Harga Spesial Reseller' },
    { image: '/images/sample.webp', title: 'Memiliki Market Yang Stabil' },
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
</script>

<style scoped lang="scss">
.after {
    &::after {
        background: linear-gradient(0deg, rgb(0 0 0 / 79%), transparent 52%, transparent);
        bottom: 0;
        content: "";
        height: 100%;
        left: 0;
        position: absolute;
        width: 100%;
        z-index: 0;
        border-radius: 0.75rem;
        z-index: 0;
    }
}

.shadow-pink {
    box-shadow: 17px 21px 0px 0 #F9EBEC;
}

.shadow-modal {
    box-shadow: 17px 21px 0px 0 #E8B5BA;
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