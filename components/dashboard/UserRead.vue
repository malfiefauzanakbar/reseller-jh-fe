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
                    placeholder="Cari berdasarkan nama dll."
                    v-model="search"
                />
            </div>
        </div>
        <div class="w-3/12">
            <VueDatePicker v-model="date" range :multi-calendars="{ solo: true }" :enable-time-picker="false"
                placeholder="Masukan tanggal" :format="'dd MMM yyyy'" />
        </div>
        <div>
            <button
                class="bg-primaryColor px-5 py-2.5 rounded-lg font-medium transition-all text-white flex items-center gap-2 disabled:bg-gray-300"
                @click="exportExcel()"
                :disabled="date.length == 0"
            >
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
            <tbody v-if="lists.length > 0">
                <tr class="bg-white border-b hover:bg-white text-gray-500" v-for="(list, index) in lists" :key="index">
                    <td class="px-6 py-3">
                        {{ (pagination.page - 1) * pagination.page_size + index + 1 }}.
                    </td>
                    <td class="px-6 py-3 capitalize">
                        {{ list.fullname ? list.fullname : '-'  }}
                    </td>
                    <td class="px-6 py-3">
                        {{ list.whatsapp_no ? list.whatsapp_no : '-'  }}
                    </td>
                    <td class="px-6 py-3">
                        {{ list.email ? list.email : '-'  }}
                    </td>
                    <td class="px-6 py-3">
                        {{ list.nik ? list.nik : '-'  }}
                    </td>
                    <td class="px-6 py-3">
                        <div
                            @mouseenter="list.isHover = true"
                            @mouseleave="list.isHover = false"
                            class="truncate w-[150px] cursor-pointer"
                        >
                            {{ list.address ? list.address : '-'  }}
                        </div>
                        <transition
                            enter="transition ease-out duration-200"
                            enter-from="opacity-0 scale-95"
                            enter-to="opacity-100 scale-100"
                            leave="transition ease-in duration-150"
                            leave-from="opacity-100 scale-100"
                            leave-to="opacity-0 scale-95"
                        >
                            <div
                                v-if="list.isHover"
                                class="absolute -translate-x-1/2 mt-2 px-3 py-2 bg-white text-black text-sm rounded-lg shadow-lg border border-gray-200"
                                role="tooltip"
                            >
                                {{ list.address }}
                            </div>
                        </transition>
                    </td>
                    <td class="relative">
                        <Menu>
                            <MenuButton>
                                <button
                                    class="py-1.5 rounded-lg text-white flex items-center gap-4 w-[100px] justify-center"
                                    :disabled="list.status_name == 'Batal' || list.status_name == 'Sepakat'"
                                    :class="{
                                        'bg-yellow-500': list.status_name == 'Proses',
                                        'bg-blue-500': list.status_name == 'Diskusi',
                                        'bg-red-500': list.status_name == 'Batal',
                                        'bg-green-500': list.status_name == 'Sepakat',
                                    }"
                                >
                                    {{ list.status_name }}
                                    <client-only>
                                        <font-awesome-icon
                                            :icon="['fas', 'angle-down']" 
                                            class="text-[14px]"
                                            v-if="list.status_name != 'Batal' && list.status_name != 'Sepakat'"
                                        />
                                    </client-only>
                                </button>
                            </MenuButton>
                            <MenuItems
                                class="absolute right-0 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-10">
                                <MenuItem v-if="list.status_name != 'Proses'">
                                <button class="text-black w-full text-left hover:bg-gray-50 px-3 py-2 disabled:text-gray-400" :disabled="list.status_name != 'Proses'">
                                    Proses
                                </button>
                                </MenuItem>
                                <MenuItem v-if="list.status_name != 'Diskusi'">
                                <button class="text-black w-full text-left hover:bg-gray-50 px-3 py-2 disabled:text-gray-400" 
                                    @click="updateStatus(list, 4)"
                                    :disabled="list.status_name == 'Batal' || list.status_name == 'Sepakat'"
                                >
                                    Diskusi
                                </button>
                                </MenuItem>
                                <MenuItem v-if="list.status_name != 'Batal'">
                                <button
                                    class="text-black w-full text-left hover:bg-gray-50 px-3 py-2 disabled:text-gray-400"
                                    @click="updateStatus(list, 5)"
                                    :disabled="list.status_name == 'Proses' || list.status_name == 'Sepakat'"
                                >
                                    Batal
                                </button>
                                </MenuItem>
                                <MenuItem v-if="list.status_name != 'Sepakat'">
                                <button class="text-black w-full text-left hover:bg-gray-50 px-3 py-2 disabled:text-gray-400"
                                    @click="updateStatus(list, 6)"
                                    :disabled="list.status_name == 'Proses' || list.status_name == 'Batal'"
                                >
                                    Sepakat
                                </button>
                                </MenuItem>
                            </MenuItems>
                        </Menu>
                    </td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr>
                    <td colspan="7" class="text-center">
                        <div class="p-4 text-xl text-gray-400">
                            Data kosong
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="mt-4" v-if="lists.length > 0">
        <Pagination
            :currentPage="pagination.page"
            :totalPages="pagination.total_pages"
            :pageSize="pagination.page_size"
            :totalItem="pagination.total_items"
            @page-change="handlePageChange"
            @page-size-change="handlePageSizeChange"
        />
    </div>
</template>

<script setup>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { ref, watch, onMounted } from 'vue';
import Pagination from '../Pagination.vue';
import { saveAs } from 'file-saver';
import { useUpdateStatusStore } from '@/stores/update-status';

const { $api, $moment } = useNuxtApp();
const date = ref([]);

watch(date, (newValue, oldValue) => {
    if (newValue !== oldValue) {
        getLists()
    }
});
const type = ref(2)
const search = ref('');
const pagination = ref({
    page: 1,
    page_size: 10 ,
    total_pages: 0,
    total_items: 0,
});

const lists = ref([])
const getLists = async (page = 1) => {
    try {
        const start_date = date.value[0] ? $moment(date.value[0]).format('YYYY-MM-DD') : null;
        const end_date = date.value[1] ? $moment(date.value[1]).format('YYYY-MM-DD') : null;

        const response = await $api.get(`/reseller`, {
            params: {
                page: page,
                page_size: pagination.value.page_size,
                type: type.value,
                keyword: search.value,
                start_date,
                end_date,
            }
        });

        const data = response.data.data.map(item => ({
            ...item,
            isLoading: false,
            isHover: false
        }));

        const paginate = response.data.pagination;
        lists.value = data;
        pagination.value = {
            page: paginate.page,
            page_size: paginate.page_size,
            total_pages: paginate.total_pages,
            total_items: paginate.total_items
        };
    } catch (error) {
        console.log(error);
    }
};

watch(search, () => {
    getLists();
});

const handlePageChange = (page) => {
    pagination.value.page = page;
    getLists(page)
}

const handlePageSizeChange = (newPageSize) => {
    pagination.value.page_size = newPageSize;
    pagination.value.page = 1;
    getLists();
};

const readUpdateStatusStore = useUpdateStatusStore();
const updateStatus = async (status, id) => {
    try {
        await readUpdateStatusStore.updateStatus(status, id);
        await getLists()
    } catch (error) {
        console.log(error)
    }
};

const exportExcel = async () => {
    try {
        const start_date = date.value[0] ? $moment(date.value[0]).format('YYYY-MM-DD') : null;
        const end_date = date.value[1] ? $moment(date.value[1]).format('YYYY-MM-DD') : null;

        const response = await $api.get('/reseller/export/excel', {
            params: {
                start_date,
                end_date,
                type: type.value,
            },
        });
        const currentDate = $moment().format('YYYY-MM-DD');
        const filename = `${currentDate}_export.xlsx`;

        saveAs(response.data.data.filename, filename);
    } catch (err) {
        console.log(err)

    }
}

onMounted(() => {
    getLists()
})
</script>

<style scoped lang="scss"></style>