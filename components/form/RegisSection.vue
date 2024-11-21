<template>
    <Form @submit="submitForm" :validation-schema="schema" v-slot="{ errors }">
        <div class="lg:flex gap-4 lg:mt-6 mt-3">
            <div class="lg:w-[250px]">
                <div class="flex">
                    <label for="ktp-section"
                        class="bg-image flex flex-col items-center justify-center w-full h-44 rounded-lg border-2 border-dashed border-primaryColor bg-[#F8E9EA] text-center cursor-pointer relative"
                        :style="{ backgroundImage: previewImage ? `url(${previewImage})` : null, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }">
                        <div class="text-primaryColor mb-4" v-if="!previewImage">
                            <client-only>
                                <font-awesome-icon :icon="['fa', 'plus-circle']" class="text-4xl text-primaryColor" />
                            </client-only>
                        </div>
                        <p class="text-black font-medium" v-if="!previewImage">Upload KTP</p>
                        <div class="w-7 h-7 rounded-full bg-white absolute bottom-2 right-2 flex items-center justify-center text-center shadow-lg"
                            v-if="previewImage">
                            <client-only>
                                <font-awesome-icon :icon="['fa', 'pencil']" class="text-primaryColor text-sm" />
                            </client-only>
                        </div>
                        <Field type="file" v-model="ktp" id="ktp-section" name="ktp" class="hidden"
                            @change="uploadKtp" />
                    </label>
                </div>
                <div v-if="errors.ktp" class="text-red-500 mt-1 text-xs italic">{{ errors.ktp }}</div>
            </div>
            <div class="w-full">
                <div class="lg:grid grid-cols-2 gap-4">
                    <div>
                        <div class="relative lg:mt-0 mt-3">
                            <Field type="text" id="fullname_section" name="fullname" autocomplete="off"
                                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                :class="{
                                    'border-red-500': errors.fullname,
                                }" placeholder="" v-model="fullname" validateOnInput />
                            <label for="fullname_section"
                                class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                Nama Lengkap
                            </label>
                        </div>
                        <div v-if="errors.fullname" class="text-red-500 mt-1 text-xs italic">{{ errors.fullname }}</div>
                    </div>
                    <div>
                        <div class="relative lg:mt-0 mt-3">
                            <Field type="text" id="whatsapp_no_section" name="whatsapp_no" autocomplete="off"
                                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                :class="{
                                    'border-red-500': errors.whatsapp_no,
                                }" placeholder="" v-model="whatsapp_no" validateOnInput />
                            <label for="whatsapp_no_section"
                                class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                No Whatsapp
                            </label>
                        </div>
                        <div v-if="errors.whatsapp_no" class="text-red-500 mt-1 text-xs italic">{{ errors.whatsapp_no }}
                        </div>
                    </div>
                    <div>
                        <div class="relative lg:mt-0 mt-3">
                            <Field type="email" id="email_section" name="email" autocomplete="off"
                                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                :class="{
                                    'border-red-500': errors.email,
                                }" placeholder="" v-model="email" validateOnInput />
                            <label for="email_section"
                                class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                Email
                            </label>
                        </div>
                        <div v-if="errors.email" class="text-red-500 mt-1 text-xs italic">{{ errors.email }}</div>
                    </div>
                    <div>
                        <div class="relative lg:mt-0 mt-3">
                            <Field type="text" id="nik_section" name="nik" autocomplete="off"
                                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                :class="{
                                    'border-red-500': errors.nik,
                                }" placeholder="" v-model="nik" validateOnInput />
                            <label for="nik_section"
                                class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                NIK
                            </label>
                        </div>
                        <div v-if="errors.nik" class="text-red-500 mt-1 text-xs italic">{{ errors.nik }}</div>
                    </div>
                </div>
                <div class="relative lg:mt-4 mt-3">
                    <Field type="text" id="address_section" name="address" autocomplete="off"
                        class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        :class="{
                            'border-red-500': errors.address,
                        }" placeholder="" v-model="address" validateOnInput />
                    <label for="address_section"
                        class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                        Alamat
                    </label>
                </div>
                <div v-if="errors.address" class="text-red-500 mt-1 text-xs italic">{{ errors.address }}</div>
                <div class="mt-4">
                    <button :disabled="isSubmit"
                        class="bg-primaryColor w-full py-3 rounded-lg font-medium shadow-md shadow-gray-300 text-white flex items-center justify-center gap-2 disabled:bg-[#f8e8ea]">
                        <svg aria-hidden="true" class="inline w-5 h-5 text-white animate-spin fill-primaryColor"
                            viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor" v-if="isSubmit" />
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill" />
                        </svg>
                        {{ isSubmit ? 'Loading...' : 'Kirim Data' }}
                    </button>
                </div>
            </div>
        </div>
    </Form>
</template>

<script setup>
import axios from 'axios';
import { Form, Field } from 'vee-validate'
import { object, string } from 'yup'
import * as Yup from 'yup'
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { useRouter } from "#app";

const router = useRouter();
const runtimeConfig = useRuntimeConfig()
const ktp = ref('');
const fullname = ref('');
const whatsapp_no = ref('');
const email = ref('');
const nik = ref('');
const address = ref('');
const isSubmit = ref(false);

const schema = object({
    ktp: string().required('Foto ktp wajib diisi'),
    fullname: string().required('Nama lengkap wajib diisi'),
    whatsapp_no: Yup.string()
        .required('No whatsapp wajib diisi')
        .test(
            'only-numbers',
            'No whatsApp hanya boleh angka',
            (value) => /^[0-9]*$/.test(value || '')
        )
        .test(
            'start-with-62',
            'No whatsApp harus diawali dengan 62',
            (value) => value ? value.startsWith('62') : false
        )
        .min(9, 'No whatsapp minimal 9 karakter'),
    email: Yup.string()
        .required('Email wajib diisi')
        .email('Format email tidak valid'),
    nik: Yup.string()
        .required('Nik wajib diisi')
        .test(
            'only-numbers',
            'Nik hanya boleh angka',
            (value) => /^[0-9]*$/.test(value || '')
        ),
    address: string().required('Alamat wajib diisi'),
});

const previewImage = ref(null);

const uploadKtp = (event) => {
    const file = event.target.files[0];
    if (file) {
        ktp.value = file;
        previewImage.value = URL.createObjectURL(file);
    }
};

const submitForm = async () => {
    const formData = new FormData();
    formData.append("ktp", ktp.value);
    formData.append("fullname", fullname.value);
    formData.append("whatsapp_no", whatsapp_no.value);
    formData.append("email", email.value);
    formData.append("nik", nik.value);
    formData.append("address", address.value);
    isSubmit.value = true
    try {
        const response = await axios.post(`${runtimeConfig.public.apiBaseUrl}/reseller`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        isSubmit.value = false
        toast('Berhasil mengirim data!', {
            theme: "light",
            type: "success",
            position: "top-right",
            dangerouslyHTMLString: true,
        });
        setTimeout(() => {
            router.push("/berhasildaftar");
        }, 1000);
    } catch (error) {
        isSubmit.value = false
        toast(error.response?.data?.message, {
            theme: "light",
            type: "warning",
            position: "top-right",
            dangerouslyHTMLString: true,
        });
    }
};
</script>