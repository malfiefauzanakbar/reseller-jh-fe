<template>
    <!-- RESELLER COUNT -->
    <div class="lg:grid grid-cols-4 gap-4">
        <div
            class="flex items-center gap-3 lg:mt-0 mt-4 bg-white shadow-[2px_4px_9px_-3px_rgba(0,_0,_0,_0.1)] rounded-xl p-4">
            <div class="w-12 h-12 rounded-lg bg-[#E5E4FF] p-2 flex items-center justify-center">
                <client-only>
                    <font-awesome-icon :icon="['fas', 'users']" class="text-[18px]" />
                </client-only>
            </div>
            <div>
                <h2 class="text-gray-500 text-sm">
                    Total Reseller
                </h2>
                <h2 class="text-xl mt-2 font-medium">
                    {{ $formatNumber(resellerCount.total) }}
                </h2>
            </div>
        </div>
        <div
            class="flex items-center gap-3 lg:mt-0 mt-4 bg-white shadow-[2px_4px_9px_-3px_rgba(0,_0,_0,_0.1)] rounded-xl p-4">
            <div class="w-12 h-12 rounded-lg bg-[#BBF1D6] p-2 flex items-center justify-center">
                <client-only>
                    <font-awesome-icon :icon="['fas', 'user-check']" class="text-[18px]" />
                </client-only>
            </div>
            <div>
                <h2 class="text-gray-500 text-sm">
                    Total User Sudah Dibaca
                </h2>
                <h2 class="text-xl mt-2 font-medium">
                    {{ $formatNumber(resellerCount.read) }}
                </h2>
            </div>
        </div>
        <div
            class="flex items-center gap-3 lg:mt-0 mt-4 bg-white shadow-[2px_4px_9px_-3px_rgba(0,_0,_0,_0.1)] rounded-xl p-4">
            <div class="w-12 h-12 rounded-lg bg-[#FFE9B6] p-2 flex items-center justify-center">
                <client-only>
                    <font-awesome-icon :icon="['fas', 'user-xmark']" class="text-[18px]" />
                </client-only>
            </div>
            <div>
                <h2 class="text-gray-500 text-sm">
                    Total User Belum Dichat
                </h2>
                <h2 class="text-xl mt-2 font-medium">
                    {{ $formatNumber(resellerCount.unread) }}
                </h2>
            </div>
        </div>
    </div>

    <!-- FILTER -->
    <div class="flex items-center mt-8 gap-4">
        <div class="w-4/12">
            <VueDatePicker v-model="date" range :multi-calendars="{ solo: true }" :enable-time-picker="false"
                placeholder="Masukan tanggal" :format="'dd MMM yyyy'" />
        </div>
        <div>
            <button
                @click="exportExcel()"
                class="bg-primaryColor px-5 py-2.5 rounded-lg font-medium transition-all text-white flex items-center gap-2">
                <client-only>
                    <font-awesome-icon :icon="['fas', 'file-excel']" class="text-[18px]" />
                </client-only>
                Export
            </button>
        </div>
    </div>

    <!-- CHART -->
    <div
        class="lg:p-6 p-4 bg-white rounded-xl border border-gray-200 shadow-[2px_4px_9px_-3px_rgba(0,_0,_0,_0.1)] mt-6">
        <h2 class="font-medium text-xl">
            Statistik Reseller -
            <span class="font-light">
                {{ date[0] && $moment(date[0]).format("DD MMM YYYY") }} -
                {{ date[1] && $moment(date[1]).format("DD MMM YYYY") }}
            </span>
        </h2>
        <div class="mt-4">
            <client-only>
                <ApexCharts type="area" :options="chartOptions" height="350" :series="chartSeries" />
            </client-only>
        </div>
    </div>

    <!-- LIST TABLE -->
    <h2 class="font-medium mt-8 text-xl">
        List Reseller -
        <span class="font-light">
            {{ date[0] && $moment(date[0]).format("DD MMM YYYY") }} -
            {{ date[1] && $moment(date[1]).format("DD MMM YYYY") }}
        </span>
    </h2>

    <div class="w-4/12 mt-4">
        <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <client-only>
                    <font-awesome-icon :icon="['fas', 'search']" class="text-[14px]" />
                </client-only>
            </div>
            <input type="text"
                class="block w-full px-4 lg:py-2 py-3 ps-8 text-sm text-gray-900 border border-black rounded-lg bg-white ffocus:border-blue-500"
                placeholder="Cari berdasarkan nama dll."
                v-model="search"
            />
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
                    <td class="flex items-center px-6 py-3">
                        <button 
                            :disabled="list.isLoading || list.status_id != 1"
                            :class="{
                                'text-green-500 underline': list.status_id == 1,
                                'text-yellow-500': list.status_id == 3,
                                'text-blue-500': list.status_id == 4,
                                'text-red-500': list.status_id == 5,
                                'text-green-500': list.status_id == 6,
                            }"
                            @click="readMessage(list)"
                        >
                            <template v-if="list.status_id == 1">
                                Chat Reseller
                            </template>
                            <template v-else>
                                {{ list.status_name }}
                            </template>
                        </button>
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
import ApexCharts from 'vue3-apexcharts'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { ref, onMounted, watch } from 'vue';
import Pagination from '../Pagination.vue';
import { useReadMessageStore } from '@/stores/read-message';
import { saveAs } from 'file-saver';

const { $api, $moment, $formatNumber } = useNuxtApp();

const chartOptions = ref({
    chart: {
        height: 350,
        type: 'area',
        toolbar: { show: false },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    xaxis: {
        categories: [],
        tooltip: {
            enabled: false
        }
    },
    yaxis: {
        min: 0,
        tickAmount: 3,
    },
    tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
            const value = series[seriesIndex][dataPointIndex];
            if (value === 0) return null;
            const category = w.globals.categoryLabels[dataPointIndex];
            return `
                <div class="p-3 rounded-lg">
                    <p class="font-light">
                        Tanggal: <span class="font-medium">${category}</span>
                    </p>
                    <p class="font-light mt-2">
                        Total Reseller: <span class="font-medium">${value}</span>
                    </p>
                </div>
            `;
        }
    },
    colors: ['#E8B5BA'],
});

const originalData = ref([]);
const originalCategories = ref([]);
const adjustedData = ref([]);
const adjustedCategories = ref([]);

const chartSeries = ref([
    {
        name: 'Sales',
        data: []
    }
]);

// GET API
const resellerCount = ref({})

const getCountReseller = async () => {
    try {
        const start_date = date.value[0] ? $moment(date.value[0]).format('YYYY-MM-DD') : null;
        const end_date = date.value[1] ? $moment(date.value[1]).format('YYYY-MM-DD') : null;

        const response = await $api.get('/reseller/dashboard/count', {
            params: {
                start_date,
                end_date
            }
        });
        resellerCount.value = response.data.data
    } catch (err) {
        console.log(err)

    }
}

const getCharts = async () => {
    try {
        const start_date = date.value[0] ? $moment(date.value[0]).format('YYYY-MM-DD') : null;
        const end_date = date.value[1] ? $moment(date.value[1]).format('YYYY-MM-DD') : null;

        const response = await $api.get('/reseller/dashboard/chart', {
            params: {
                start_date,
                end_date
            }
        });
        const apiData = response.data.data;

        originalData.value = apiData.data || [];
        originalCategories.value = apiData.categories || [];

        adjustedData.value = originalData.value.length === 1
            ? [0, ...originalData.value, 0]
            : originalData.value;

        adjustedCategories.value = originalCategories.value.length === 1
            ? [' ', ...originalCategories.value, ' ']
            : originalCategories.value;

        chartOptions.value = {
            ...chartOptions.value,
            xaxis: {
                ...chartOptions.value.xaxis,
                categories: adjustedCategories.value
            }
        };

        chartSeries.value = [
            {
                name: '',
                data: adjustedData.value
            }
        ];
    } catch (err) {
        console.log(err)

    }
}
const date = ref([]);

onMounted(() => {
    const today = new Date();
    date.value = [today, today];
})

watch(date, (newValue, oldValue) => {
    if (newValue !== oldValue) {
        getCharts();
        getLists()
        getCountReseller()
    }
});
const type = ref()
const search = ref('');
const pagination = ref({
    page: 1,
    page_size: 10,
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

const readMessageStore = useReadMessageStore();
const readMessage = async (message) => {
    try {
        await readMessageStore.readMessage(message);
        await getLists()
        await getCountReseller()
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
</script>

<style scoped lang="scss"></style>