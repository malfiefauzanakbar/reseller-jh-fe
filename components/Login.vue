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
                        Login Akun
                    </h2>
                    <p class="font-light text-center mb-6">
                        Selamat datang di Login Admin Reseller
                    </p>
                    <Form @submit="submitLogin" :validation-schema="schema" v-slot="{ errors }">
                        <div>
                            <div class="mb-2">
                                <label>Username</label>
                            </div>
                            <Field
                                name="username"
                                id="username"
                                type="text"
                                autocomplete="off"
                                class="px-3 pb-3.5 pt-3.5 w-full text-md text-black bg-white rounded-lg border border-black focus:outline-none focus:ring-0 focus:border-blue-600"
                                :class="{
                                    'border-red-500': errors.username,
                                }"
                                placeholder="Masukkan username"
                                v-model="username"
                                validateOnInput
                            />
                        </div>
                        <div v-if="errors.username" class="text-red-500 mt-1 text-xs italic">{{ errors.username }}</div>
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
                                id="password"
                                name="password"
                                :type="showPassword ? 'text' : 'password'"
                                autocomplete="off"
                                class="px-3 pb-3.5 pt-3.5 w-full text-md text-black bg-white rounded-lg border border-black focus:outline-none focus:ring-0 focus:border-blue-600"
                                :class="{
                                    'border-red-500': errors.password,
                                }"
                                placeholder="Masukkan password"
                                v-model="password"
                                validateOnInput
                            />
                        </div>
                        <div v-if="errors.password" class="text-red-500 mt-1 text-xs italic">{{ errors.password }}</div>
                        <div class="mt-6">
                            <button 
                                class="bg-primaryColor border border-black py-4 w-full rounded-lg shadow-md"
                                :disabled="authStore.islogin"
                            >
                                {{ authStore.islogin ? 'Loading...' : 'Masuk' }}
                            </button>
                        </div>
                    </Form>
                    <div class="flex items-center my-4">
                        <div class="flex-grow border-t border-gray-300"></div>
                        <span class="px-4 text-gray-500">atau</span>
                        <div class="flex-grow border-t border-gray-300"></div>
                    </div>
                    <p class="text-center text-gray-600 font-normal">
                        Belum punya akun? <NuxtLink to="/register" class="text-primaryColor font-medium">Daftar Sekarang</NuxtLink>
                    </p>
                </div>
            </div>
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
    const username = ref(authStore.username);
    const password = ref(authStore.password);

    const schema = object({
        username: string().required('Username wajib diisi'),
        password: Yup.string()
            .required('Password wajib diisi')
    });

    const submitLogin = async () => {
        await authStore.login(username.value, password.value)
    }
</script>

<style lang="scss" scoped></style>