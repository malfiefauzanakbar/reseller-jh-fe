<template>
    <h2 class="font-medium mt-8 text-2xl">
        Daftar User
    </h2>
    <!-- FILTER -->
    <div class="flex items-center gap-4 mt-6">
        <div class="w-3/12">
            <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <client-only>
                        <font-awesome-icon :icon="['fas', 'search']" class="text-[14px]" />
                    </client-only>
                </div>
                <input type="text"
                    class="block w-full px-4 py-2.5 ps-8 text-sm text-gray-900 border border-black rounded-lg bg-white ffocus:border-blue-500"
                    placeholder="Cari berdasarkan nama dll." />
            </div>
        </div>
        <div class="w-3/12">
            <VueDatePicker v-model="date" range :multi-calendars="{ solo: true }" :enable-time-picker="false"
                placeholder="Masukan tanggal" :format="'dd MMM yyyy'" />
        </div>
        <div>
            <button
                class="bg-[#E8B5BA] px-5 py-2.5 rounded-lg font-medium transition-all text-white flex items-center gap-2">
                <client-only>
                    <font-awesome-icon :icon="['fas', 'file-excel']" class="text-[18px]" />
                </client-only>
                Export
            </button>
        </div>
    </div>
    <div class="relative shadow-md sm:rounded-lg mt-4">
        <table class="w-full text-sm text-left rtl:text-right">
            <thead class="text-md text-gray-700 bg-gray-100">
                <tr>
                    <th scope="col" class="px-6 py-4 font-medium">
                        No
                    </th>
                    <th scope="col" class="px-6 py-4 font-medium">
                        Nama Lengkap
                    </th>
                    <th scope="col" class="px-6 py-4 font-medium">
                        No Whatsapp
                    </th>
                    <th scope="col" class="px-6 py-4 font-medium">
                        Email
                    </th>
                    <th scope="col" class="px-6 py-4 font-medium">
                        Nik
                    </th>
                    <th scope="col" class="px-6 py-4 font-medium">
                        Alamat
                    </th>
                    <th scope="col" class="px-6 py-4 font-medium">
                        Aksi
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b hover:bg-white text-gray-500">
                    <td class="px-6 py-3">
                        1
                    </td>
                    <td class="px-6 py-3">
                        Jhon Jhonson
                    </td>
                    <td class="px-6 py-3">
                        08878787378
                    </td>
                    <td class="px-6 py-3">
                        email@gmail.com
                    </td>
                    <td class="px-6 py-3">
                        12981928198288
                    </td>
                    <td class="px-6 py-3">
                        Jalan raya jalan jalan
                    </td>
                    <td class="relative">
                        <Menu>
                            <MenuButton>
                                <button class="bg-yellow-300 px-4 py-1.5 rounded-lg text-black flex items-center gap-4">
                                    Proses
                                    <client-only>
                                        <font-awesome-icon :icon="['fas', 'angle-down']" class="text-[14px]" />
                                    </client-only>
                                </button>
                            </MenuButton>
                            <MenuItems
                                class="absolute right-0 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-10"
                            >
                                <MenuItem>
                                    <button class="text-black w-full text-left hover:bg-gray-50 px-3 py-2">
                                        Diskusi
                                    </button>
                                </MenuItem>
                                <MenuItem>
                                    <button class="text-black w-full text-left hover:bg-gray-50 px-3 py-2">
                                        Batal
                                    </button>
                                </MenuItem>
                                <MenuItem>
                                    <button class="text-black w-full text-left hover:bg-gray-50 px-3 py-2">
                                        Sepakat
                                    </button>
                                </MenuItem>
                            </MenuItems>
                        </Menu>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="mt-3 flex items-center">
        <p class="text-sm text-gray-600">
            Menampilkan <span class="font-medium text-black">1-10</span> Data dari <span class="font-medium text-black">4</span> Data
        </p>
        <div class="ms-auto">
            <div class="relative">
                <select 
                    id="payment_method"
                    name="payment_method"
                    as="select"
                    class="appearance-none block w-28 p-2 text-sm border rounded-lg bg-white"
                >
                    <option value="">10 Rows</option>
                    <option value="">20 Rows</option>
                    <option value="">30 Rows</option>
                    <option value="">40 Rows</option>
                    <option value="">50 Rows</option>
                    <option value="">100 Rows</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                    <client-only>
                        <font-awesome-icon :icon="['fas', 'angle-down']" class="text-[14px]" />
                    </client-only>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import VueDatePicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css'
    import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

    const date = ref([]);

    onMounted(() => {
        const today = new Date();
        date.value = [today, today];
    })
</script>

<style scoped lang="scss"></style>