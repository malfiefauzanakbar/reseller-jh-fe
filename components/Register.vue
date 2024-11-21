<template>
    <div class="h-screen bg-[#FAF4F8] relative">
        <nuxt-img src="/images/kincir.webp" class="absolute lg:right-16 right-1 bottom-0"  title="" alt="" loading="lazy" />
        <nuxt-img src="/images/butterfly-1.webp" class="absolute lg:left-32 right-10 top-24" width="60" title="" alt=""
                loading="lazy" />
        <nuxt-img src="/images/daun-1.webp" class="absolute left-0 top-0" width="100" title="" alt="" loading="lazy" />
        <div class="h-screen overflow-x-hidden relative">
            <Form @submit="submitRegister" :validation-schema="schema" v-slot="{ errors }">
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
                            <Field
                                type="email"
                                id="email"
                                name="email"
                                autocomplete="off"
                                class="px-3 pb-3.5 pt-3.5 w-full text-md text-black bg-white rounded-lg border border-black focus:outline-none focus:ring-0 focus:border-blue-600"
                                placeholder="Masukkan email"
                                v-model="email"
                                :class="{
                                    'border-red-500': errors.email,
                                }"
                                validateOnInput
                            />
                            <div v-if="errors.email" class="text-red-500 mt-1 text-xs italic">{{ errors.email }}</div>
                        </div>
                        <div class="mb-2 mt-4">
                            <label>Username</label>
                        </div>
                        <Field
                            type="text"
                            id="usernameRegis"
                            name="usernameRegis"
                            autocomplete="off"
                            class="px-3 pb-3.5 pt-3.5 w-full text-md text-black bg-white rounded-lg border border-black focus:outline-none focus:ring-0 focus:border-blue-600"
                            placeholder="Masukkan username"
                            v-model="usernameRegis"
                            :class="{
                                'border-red-500': errors.usernameRegis,
                            }"
                            validateOnInput
                        />
                        <div v-if="errors.usernameRegis" class="text-red-500 mt-1 text-xs italic">{{ errors.usernameRegis }}</div>
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
                            <Field 
                                id="passwordRegis"
                                name="passwordRegis"
                                :type="showPassword ? 'text' : 'password'"
                                autocomplete="off"
                                class="px-3 pb-3.5 pt-3.5 w-full text-md text-black bg-white rounded-lg border border-black focus:outline-none focus:ring-0 focus:border-blue-600"
                                placeholder="Masukkan password"
                                v-model="passwordRegis"
                                :class="{
                                    'border-red-500': errors.passwordRegis,
                                }"
                                validateOnInput
                            />
                            <div v-if="errors.passwordRegis" class="text-red-500 mt-1 text-xs italic">{{ errors.passwordRegis }}</div>
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
                            <Field 
                                id="confirmPasswordRegis"
                                name="confirmPasswordRegis"
                                :type="showConfirmationPassword ? 'text' : 'password'"
                                autocomplete="off"
                                class="px-3 pb-3.5 pt-3.5 w-full text-md text-black bg-white rounded-lg border border-black focus:outline-none focus:ring-0 focus:border-blue-600"
                                placeholder="Masukkan konfirmasi password"
                                v-model="confirmPasswordRegis"
                                :class="{
                                    'border-red-500': errors.confirmPasswordRegis,
                                }"
                                validateOnInput
                            />
                            <div v-if="errors.confirmPasswordRegis" class="text-red-500 mt-1 text-xs italic">{{ errors.confirmPasswordRegis }}</div>
                        </div>
                        <div class="mt-6">
                            <button
                                class="bg-primaryColor border border-black py-4 w-full rounded-lg shadow-md"
                                :disabled="authStore.islogin"
                            >
                                {{ authStore.isRegis ? 'Loading...' : 'Daftar' }}
                            </button>
                        </div>
                        <div class="flex items-center my-4">
                            <div class="flex-grow border-t border-gray-300"></div>
                            <span class="px-4 text-gray-500">atau</span>
                            <div class="flex-grow border-t border-gray-300"></div>
                        </div>
                        <p class="text-center text-gray-600 font-normal">
                            Sudah punya akun? <NuxtLink to="/login" class="text-primaryColor font-medium">Login Sekarang</NuxtLink>
                        </p>
                    </div>
                </div>
            </Form>
        </div>
    </div>
</template>

<script setup>

    import { useAuthStore } from '@/stores/auth';
    import { Form, Field } from 'vee-validate'
    import { object, string } from 'yup'
    import * as Yup from 'yup'
    
    const authStore = useAuthStore();
    const showPassword = ref(false);
    const showConfirmationPassword = ref(false);
    const email = ref(authStore.email);
    const usernameRegis = ref(authStore.usernameRegis);
    const passwordRegis = ref(authStore.passwordRegis);
    const confirmPasswordRegis = ref(authStore.confirmPasswordRegis);

    const schema = object({
        email: Yup.string()
        .required('Email wajib diisi')
        .email('Format email tidak valid'),
        usernameRegis: string().required('Username wajib diisi'),
        passwordRegis: Yup.string()
            .required('Password wajib diisi'),
        confirmPasswordRegis: Yup.string()
        .oneOf([Yup.ref('passwordRegis'), null], 'Konfirmasi password tidak cocok')
        .required('Konfirmasi password wajib diisi'),
    });

    const submitRegister = async () => {
        await authStore.register(email.value, usernameRegis.value, passwordRegis.value, confirmPasswordRegis.value)
    }
</script>

<style lang="scss" scoped></style>