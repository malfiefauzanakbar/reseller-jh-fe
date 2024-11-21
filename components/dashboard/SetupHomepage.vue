<template>
    <Form @submit="submitForm" :validation-schema="schema" v-slot="{ errors }">
        <h2 class="font-medium text-2xl">
            Setting Homepage Reseller
        </h2>
        <div class="flex gap-4 mt-6">
            <div class="w-[250px]">
                <div>
                    <label for="upload"
                        class="flex flex-col items-center justify-center w-full h-44 rounded-lg border-2 border-dashed border-primaryColor bg-[#F8E9EA] text-center cursor-pointer relative"
                        :style="{ backgroundImage: previewImage ? `url(${previewImage})` : null, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }">
                        <div class="text-primaryColor mb-4" v-if="!previewImage">
                            <client-only>
                                <font-awesome-icon :icon="['fa', 'plus-circle']" class="text-4xl text-primaryColor" />
                            </client-only>
                        </div>
                        <p class="text-black font-medium" v-if="!previewImage">Upload Gambar</p>
                        <div class="w-7 h-7 rounded-full bg-white absolute bottom-2 right-2 flex items-center justify-center text-center shadow-lg"
                            v-if="previewImage">
                            <client-only>
                                <font-awesome-icon :icon="['fa', 'pencil']" class="text-primaryColor text-sm" />
                            </client-only>
                        </div>
                        <input type="file" id="upload" class="hidden" @change="uploadImage" />
                    </label>
                </div>
            </div>
            <div class="w-full">
                <div class="mb-2">
                    <label>Judul Banner</label>
                </div>
                <Field type="text" name="banner_title" id="banner_title" autocomplete="off"
                    class="px-3 pb-2.5 pt-2.5 w-full text-md text-black bg-white rounded-lg border border-black focus:outline-none focus:ring-0 focus:border-blue-600"
                    :class="{
                        'border-red-500': errors.banner_title,
                    }" placeholder="Masukkan judul banner" v-model="banner_title" />
                <div v-if="errors.banner_title" class="text-red-500 mt-1 text-xs italic">{{ errors.banner_title }}</div>
                <div class="mb-2 mt-4">
                    <label>Deskripsi Singkat</label>
                </div>
                <Field type="text" id="short_description" name="short_description" autocomplete="off"
                    class="px-3 pb-2.5 pt-2.5 w-full text-md text-black bg-white rounded-lg border border-black focus:outline-none focus:ring-0 focus:border-blue-600"
                    placeholder="Masukkan deskripsi singkat" :class="{
                        'border-red-500': errors.short_description,
                    }" v-model="short_description" />
                <div v-if="errors.short_description" class="text-red-500 mt-1 text-xs italic">{{
                    errors.short_description }}</div>
            </div>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-6">
            <div>
                <div class="mb-2">
                    <label>Judul Journey</label>
                </div>
                <Field type="text" id="journey_title" name="journey_title" autocomplete="off"
                    class="px-3 pb-2.5 pt-2.5 w-full text-md text-black bg-white rounded-lg border border-black focus:outline-none focus:ring-0 focus:border-blue-600"
                    placeholder="Masukkan judul journey" :class="{
                        'border-red-500': errors.journey_title,
                    }" v-model="journey_title" />
                <div v-if="errors.journey_title" class="text-red-500 mt-1 text-xs italic">{{ errors.journey_title }}
                </div>
            </div>
            <div>
                <div class="mb-2">
                    <label>Deskripsi Journey</label>
                </div>
                <Field type="text" id="journey_description" name="journey_description" autocomplete="off"
                    class="px-3 pb-2.5 pt-2.5 w-full text-md text-black bg-white rounded-lg border border-black focus:outline-none focus:ring-0 focus:border-blue-600"
                    placeholder="Masukkan deskripsi journey" :class="{
                        'border-red-500': errors.journey_description,
                    }" v-model="journey_description" />
                <div v-if="errors.journey_description" class="text-red-500 mt-1 text-xs italic">{{
                    errors.journey_description }}</div>
            </div>
            <div>
                <div class="mb-2">
                    <label>Judul Video</label>
                </div>
                <Field type="text" id="video_title" name="video_title" autocomplete="off"
                    class="px-3 pb-2.5 pt-2.5 w-full text-md text-black bg-white rounded-lg border border-black focus:outline-none focus:ring-0 focus:border-blue-600"
                    placeholder="Masukkan judul journey" :class="{
                        'border-red-500': errors.video_title,
                    }" v-model="video_title" />
                <div v-if="errors.video_title" class="text-red-500 mt-1 text-xs italic">{{ errors.video_title }}
                </div>
            </div>
            <div>
                <div class="mb-2">
                    <label>Deskripsi Video</label>
                </div>
                <Field type="text" id="video_description" name="video_description" autocomplete="off"
                    class="px-3 pb-2.5 pt-2.5 w-full text-md text-black bg-white rounded-lg border border-black focus:outline-none focus:ring-0 focus:border-blue-600"
                    placeholder="Masukkan deskripsi journey" :class="{
                        'border-red-500': errors.video_description,
                    }" v-model="video_description" />
                <div v-if="errors.video_description" class="text-red-500 mt-1 text-xs italic">{{
                    errors.video_description }}</div>
            </div>
            <div>
                <div class="mb-2">
                    <label>Judul Store</label>
                </div>
                <Field type="text" autocomplete="off" id="store_title" name="store_title"
                    class="px-3 pb-2.5 pt-2.5 w-full text-md text-black bg-white rounded-lg border border-black focus:outline-none focus:ring-0 focus:border-blue-600"
                    placeholder="Masukkan judul store" :class="{
                        'border-red-500': errors.store_title,
                    }" v-model="store_title" />
                <div v-if="errors.store_title" class="text-red-500 mt-1 text-xs italic">{{
                    errors.store_title }}</div>
            </div>
            <div>
                <div class="mb-2">
                    <label>Deskripsi Store</label>
                </div>
                <Field type="text" autocomplete="off" id="store_description" name="store_description"
                    class="px-3 pb-2.5 pt-2.5 w-full text-md text-black bg-white rounded-lg border border-black focus:outline-none focus:ring-0 focus:border-blue-600"
                    placeholder="Masukkan deskripsi store" :class="{
                        'border-red-500': errors.store_description,
                    }" v-model="store_description" />
                <div v-if="errors.store_description" class="text-red-500 mt-1 text-xs italic">{{
                    errors.store_description }}</div>
            </div>
            <div>
                <div class="mb-2">
                    <label>Judul Tier</label>
                </div>
                <Field type="text" autocomplete="off" id="tier_title" name="tier_title"
                    class="px-3 pb-2.5 pt-2.5 w-full text-md text-black bg-white rounded-lg border border-black focus:outline-none focus:ring-0 focus:border-blue-600"
                    placeholder="Masukkan judul tier" :class="{
                        'border-red-500': errors.tier_title,
                    }" v-model="tier_title" />
                <div v-if="errors.tier_title" class="text-red-500 mt-1 text-xs italic">{{
                    errors.tier_title }}</div>
            </div>
            <div>
                <div class="mb-2">
                    <label>Deskripsi Tier</label>
                </div>
                <Field type="text" autocomplete="off" id="tier_description" name="tier_description"
                    class="px-3 pb-2.5 pt-2.5 w-full text-md text-black bg-white rounded-lg border border-black focus:outline-none focus:ring-0 focus:border-blue-600"
                    placeholder="Masukkan deskripsi tier" :class="{
                        'border-red-500': errors.tier_description,
                    }" v-model="tier_description" />
                <div v-if="errors.tier_description" class="text-red-500 mt-1 text-xs italic">{{
                    errors.tier_description }}</div>
            </div>
            <div>
                <div class="mb-2">
                    <label>Judul Fasilitas</label>
                </div>
                <Field type="text" autocomplete="off" id="facility_title" name="facility_title"
                    class="px-3 pb-2.5 pt-2.5 w-full text-md text-black bg-white rounded-lg border border-black focus:outline-none focus:ring-0 focus:border-blue-600"
                    placeholder="Masukkan judul fasilitas" :class="{
                        'border-red-500': errors.facility_title,
                    }" v-model="facility_title" />
                <div v-if="errors.facility_title" class="text-red-500 mt-1 text-xs italic">{{
                    errors.facility_title }}</div>
            </div>
            <div>
                <div class="mb-2">
                    <label>Deskripsi Fasilitas</label>
                </div>
                <Field type="text" autocomplete="off" id="facility_description" name="facility_description"
                    class="px-3 pb-2.5 pt-2.5 w-full text-md text-black bg-white rounded-lg border border-black focus:outline-none focus:ring-0 focus:border-blue-600"
                    placeholder="Masukkan deskripsi fasilitas" :class="{
                        'border-red-500': errors.facility_description,
                    }" v-model="facility_description" />
                <div v-if="errors.facility_description" class="text-red-500 mt-1 text-xs italic">{{
                    errors.facility_description }}</div>
            </div>
        </div>
        <div class="flex mt-4">
            <div class="ms-auto">
                <button :disabled="isSubmit"
                    type="submit"
                    class="bg-primaryColor border border-black py-3 px-20 rounded-lg shadow-md"
                >
                    <svg aria-hidden="true" class="inline w-5 h-5 text-white animate-spin fill-primaryColor"
                        viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor" v-if="isSubmit" />
                        <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill" />
                    </svg>
                    {{ isSubmit ? 'Loading...' : 'Update Data' }}
                </button>
            </div>
        </div>
    </Form>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Form, Field } from 'vee-validate'
import { object, string } from 'yup'
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const { $api } = useNuxtApp();

const banner_title = ref()
const short_description = ref()
const journey_title = ref()
const journey_description = ref()
const video_title = ref()
const video_description = ref()
const store_title = ref()
const store_description = ref()
const tier_title = ref()
const tier_description = ref()
const facility_title = ref()
const facility_description = ref()
const banner_image = ref()
const previewImage = ref()
const isSubmit = ref(false)

const schema = object({
    banner_title: string().required('Judul wajib diisi'),
    short_description: string().required('Deskripsi wajib diisi'),
    journey_title: string().required('Judul wajib diisi'),
    journey_description: string().required('Deskripsi wajib diisi'),
    video_title: string().required('Judul wajib diisi'),
    video_description: string().required('Deskripsi wajib diisi'),
    store_title: string().required('Judul wajib diisi'),
    store_description: string().required('Deskripsi wajib diisi'),
    tier_title: string().required('Judul wajib diisi'),
    tier_description: string().required('Deskripsi wajib diisi'),
    facility_title: string().required('Judul wajib diisi'),
    facility_description: string().required('Deskripsi wajib diisi'),
});

const getDetail = async () => {
    try {
        const response = await $api.get(`/homepage`);
        const data = response.data.data
        banner_title.value = data.banner_title
        short_description.value = data.short_description
        journey_title.value = data.journey_title
        journey_description.value = data.journey_description
        video_title.value = data.video_title
        video_description.value = data.video_description
        store_title.value = data.store_title
        store_description.value = data.store_description
        tier_title.value = data.tier_title
        tier_description.value = data.tier_description
        facility_title.value = data.facility_title
        facility_description.value = data.facility_description
        previewImage.value = data.banner_image
    } catch (error) {
        console.log(error);
    }
};
onMounted(() => {
    getDetail()
})

const uploadImage = (event) => {
    const file = event.target.files[0];
    if (file) {
        banner_image.value = file;
        previewImage.value = URL.createObjectURL(file);
    }
};

const submitForm = async () => {
    const formData = new FormData();
    if(banner_image.value){
        formData.append("banner_image", banner_image.value);
    }
    formData.append("banner_title", banner_title.value);
    formData.append("short_description", short_description.value);
    formData.append("journey_title", journey_title.value);
    formData.append("journey_description", journey_description.value);
    formData.append("video_title", video_title.value);
    formData.append("video_description", video_description.value);
    formData.append("store_title", store_title.value);
    formData.append("store_description", store_description.value);
    formData.append("tier_title", tier_title.value);
    formData.append("tier_description", tier_description.value);
    formData.append("facility_title", facility_title.value);
    formData.append("facility_description", facility_description.value);
    isSubmit.value = true
    try {
        const response = await $api.put(`/homepage`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        isSubmit.value = false
        toast('Berhasil update data!', {
            theme: "light",
            type: "success",
            position: "top-right",
            dangerouslyHTMLString: true,
        });
        getDetail()
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

<style scoped lang="scss"></style>