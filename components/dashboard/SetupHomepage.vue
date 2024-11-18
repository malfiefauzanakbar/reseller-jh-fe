<template>
    <h2 class="font-medium text-2xl">
        Seting Homepage Reseller
    </h2>
    <div class="flex gap-4 mt-6">
        <div class="flex w-[250px]">
            <label for="upload"
                class="flex flex-col items-center justify-center w-full h-44 rounded-lg border-2 border-dashed border-[#E8B5BA] bg-[#F8E9EA] text-center cursor-pointer">
                <div class="text-pink-300 mb-4">
                    <client-only>
                        <font-awesome-icon :icon="['fa', 'plus-circle']"
                            class="text-3xl text-[#E8B5BA]" />
                    </client-only>
                </div>
                <p class="text-black font-medium">Upload Talent Banner</p>
                <p class="text-gray-500">Note: max 2 mb</p>
                <input type="file" id="upload" class="hidden" />
            </label>
        </div>
        <div class="w-full">
            <div class="mb-2">
                <label>Judul Banner</label>
            </div>
            <input 
                type="text"
                autocomplete="off"
                class="px-3 pb-2.5 pt-2.5 w-full text-md text-[#737373] bg-white rounded-lg border border-black focus:outline-none focus:ring-0 focus:border-blue-600"
                placeholder="Masukkan judul banner"
            />
            <div class="mb-2 mt-4">
                <label>Deskripsi Singkat</label>
            </div>
            <input 
                type="text"
                autocomplete="off"
                class="px-3 pb-2.5 pt-2.5 w-full text-md text-[#737373] bg-white rounded-lg border border-black focus:outline-none focus:ring-0 focus:border-blue-600"
                placeholder="Masukkan deskripsi singkat"
            />
        </div>
    </div>
    <div class="grid grid-cols-2 gap-4 mt-6">
        <div>
            <div class="mb-2">
                <label>Judul Journey</label>
            </div>
            <input 
                type="text"
                autocomplete="off"
                class="px-3 pb-2.5 pt-2.5 w-full text-md text-[#737373] bg-white rounded-lg border border-black focus:outline-none focus:ring-0 focus:border-blue-600"
                placeholder="Masukkan judul journey"
            />
        </div>
        <div>
            <div class="mb-2">
                <label>Deskripsi Journey</label>
            </div>
            <input 
                type="text"
                autocomplete="off"
                class="px-3 pb-2.5 pt-2.5 w-full text-md text-[#737373] bg-white rounded-lg border border-black focus:outline-none focus:ring-0 focus:border-blue-600"
                placeholder="Masukkan deskripsi journey"
            />
        </div>
        <div>
            <div class="mb-2">
                <label>Judul Store</label>
            </div>
            <input 
                type="text"
                autocomplete="off"
                class="px-3 pb-2.5 pt-2.5 w-full text-md text-[#737373] bg-white rounded-lg border border-black focus:outline-none focus:ring-0 focus:border-blue-600"
                placeholder="Masukkan judul store"
            />
        </div>
        <div>
            <div class="mb-2">
                <label>Deskripsi Store</label>
            </div>
            <input 
                type="text"
                autocomplete="off"
                class="px-3 pb-2.5 pt-2.5 w-full text-md text-[#737373] bg-white rounded-lg border border-black focus:outline-none focus:ring-0 focus:border-blue-600"
                placeholder="Masukkan deskripsi store"
            />
        </div>
        <div>
            <div class="mb-2">
                <label>Judul Tier</label>
            </div>
            <input 
                type="text"
                autocomplete="off"
                class="px-3 pb-2.5 pt-2.5 w-full text-md text-[#737373] bg-white rounded-lg border border-black focus:outline-none focus:ring-0 focus:border-blue-600"
                placeholder="Masukkan judul tier"
            />
        </div>
        <div>
            <div class="mb-2">
                <label>Deskripsi Tier</label>
            </div>
            <input 
                type="text"
                autocomplete="off"
                class="px-3 pb-2.5 pt-2.5 w-full text-md text-[#737373] bg-white rounded-lg border border-black focus:outline-none focus:ring-0 focus:border-blue-600"
                placeholder="Masukkan deskripsi tier"
            />
        </div>
        <div>
            <div class="mb-2">
                <label>Judul Fasilitas</label>
            </div>
            <input 
                type="text"
                autocomplete="off"
                class="px-3 pb-2.5 pt-2.5 w-full text-md text-[#737373] bg-white rounded-lg border border-black focus:outline-none focus:ring-0 focus:border-blue-600"
                placeholder="Masukkan judul fasilitas"
            />
        </div>
        <div>
            <div class="mb-2">
                <label>Deskripsi Fasilitas</label>
            </div>
            <input 
                type="text"
                autocomplete="off"
                class="px-3 pb-2.5 pt-2.5 w-full text-md text-[#737373] bg-white rounded-lg border border-black focus:outline-none focus:ring-0 focus:border-blue-600"
                placeholder="Masukkan deskripsi fasilitas"
            />
        </div>
    </div>
    <div class="flex mt-4">
        <div class="ms-auto">
            <button class="bg-[#E8B5BA] border border-black py-3 px-20 rounded-lg shadow-md">
                Update Data
            </button>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped lang="scss"></style>