<template>
    <div class="h-screen bg-[#FAF4F8] relative">
        <nuxt-img src="/images/kincir.webp" class="absolute lg:right-16 right-1 bottom-0"  title="" alt="" loading="lazy" />
        <nuxt-img src="/images/butterfly-1.webp" class="absolute lg:left-32 right-10 top-24" width="60" title="" alt=""
                loading="lazy" />
        <nuxt-img src="/images/daun-1.webp" class="absolute left-0 top-0" width="100" title="" alt="" loading="lazy" />
        <div class="h-screen overflow-x-hidden relative">
            <div class="flex h-screen items-center justify-center p-4 z-20">
                <div class="lg:p-6 p-0 rounded-xl lg:w-1/3 w-full">
                    <div class="flex items-center justify-center">
                        <nuxt-img src="/images/logo.webp" width="70" title="" alt=""
                            loading="lazy" />
                    </div>
                    <h2 class="text-2xl font-medium text-center mt-3">
                        Daftar Akun
                    </h2>
                    <p class="font-light text-center mb-6">
                        Isi Data dengan Lengkap dan Akurat!
                    </p>
                    <div>
                        <div class="mb-2">
                            <label>Email</label>
                        </div>
                        <input type="email"
                            autocomplete="off"
                            class="px-3 pb-3.5 pt-3.5 w-full text-md text-[#737373] bg-white rounded-lg border border-black focus:outline-none focus:ring-0 focus:border-blue-600"
                            placeholder="Masukkan email"
                        />
                    </div>
                    <div class="mb-2 mt-4">
                        <label>Username</label>
                    </div>
                    <input type="text"
                        autocomplete="off"
                        class="px-3 pb-3.5 pt-3.5 w-full text-md text-[#737373] bg-white rounded-lg border border-black focus:outline-none focus:ring-0 focus:border-blue-600"
                        placeholder="Masukkan username"
                    />
                    <div class="mb-2 mt-4">
                        <label>Password</label>
                    </div>
                    <div class="relative">
                        <div class="absolute right-3 mt-eye cursor-pointer top-[14px]" @click="showPassword = !showPassword">
                            <client-only>
                                <font-awesome-icon v-if="showPassword" :icon="['fas', 'eye']" class="text-[16px]" />
                                <font-awesome-icon v-if="!showPassword" :icon="['fas', 'eye-slash']" class="text-[16px]" />
                            </client-only>
                        </div>
                        <input 
                            id="password" :type="showPassword ? 'text' : 'password'"
                            autocomplete="off"
                            class="px-3 pb-3.5 pt-3.5 w-full text-md text-[#737373] bg-white rounded-lg border border-black focus:outline-none focus:ring-0 focus:border-blue-600"
                            placeholder="Masukkan password"
                        />
                    </div>
                    <div class="mb-2 mt-4">
                        <label>Konfirmasi Password</label>
                    </div>
                    <div class="relative">
                        <div class="absolute right-3 mt-eye cursor-pointer top-[14px]" @click="showConfirmationPassword = !showConfirmationPassword">
                            <client-only>
                                <font-awesome-icon v-if="showConfirmationPassword" :icon="['fas', 'eye']" class="text-[16px]" />
                                <font-awesome-icon v-if="!showConfirmationPassword" :icon="['fas', 'eye-slash']" class="text-[16px]" />
                            </client-only>
                        </div>
                        <input 
                            id="password" :type="showConfirmationPassword ? 'text' : 'password'"
                            autocomplete="off"
                            class="px-3 pb-3.5 pt-3.5 w-full text-md text-[#737373] bg-white rounded-lg border border-black focus:outline-none focus:ring-0 focus:border-blue-600"
                            placeholder="Masukkan konfirmasi password"
                        />
                    </div>
                    <div class="mt-6">
                        <button class="bg-[#E8B5BA] border border-black py-4 w-full rounded-lg shadow-md">
                            Daftar
                        </button>
                    </div>
                    <div class="flex items-center my-4">
                        <div class="flex-grow border-t border-gray-300"></div>
                        <span class="px-4 text-gray-500">atau</span>
                        <div class="flex-grow border-t border-gray-300"></div>
                    </div>
                    <p class="text-center text-gray-600 font-normal">
                        Sudah punya akun? <NuxtLink to="/login" class="text-[#E8B5BA] font-medium">Login Sekarang</NuxtLink>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const showPassword = ref(false);
    const showConfirmationPassword = ref(false);
</script>

<style lang="scss" scoped></style>