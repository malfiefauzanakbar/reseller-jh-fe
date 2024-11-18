<template>
    <!-- RESELLER COUNT -->
    <div class="lg:grid grid-cols-4 gap-4">
        <div class="flex items-center gap-3 lg:mt-0 mt-4 bg-white shadow-[2px_4px_9px_-3px_rgba(0,_0,_0,_0.1)] rounded-xl p-4">
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
                    30.000
                </h2>
            </div>
        </div>
        <div class="flex items-center gap-3 lg:mt-0 mt-4 bg-white shadow-[2px_4px_9px_-3px_rgba(0,_0,_0,_0.1)] rounded-xl p-4">
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
                    30.000
                </h2>
            </div>
        </div>
        <div class="flex items-center gap-3 lg:mt-0 mt-4 bg-white shadow-[2px_4px_9px_-3px_rgba(0,_0,_0,_0.1)] rounded-xl p-4">
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
                    30.000
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
                class="bg-[#E8B5BA] px-5 py-2.5 rounded-lg font-medium transition-all text-white flex items-center gap-2">
                <client-only>
                    <font-awesome-icon :icon="['fas', 'file-excel']" class="text-[18px]" />
                </client-only>
                Export
            </button>
        </div>
    </div>

    <!-- CHART -->
    <div class="lg:p-6 p-4 bg-white rounded-xl border border-gray-200 shadow-[2px_4px_9px_-3px_rgba(0,_0,_0,_0.1)] mt-6">
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
    <h2 class="font-medium mt-8 text-xl">
        List Reseller -
        <span class="font-light">
            {{ date[0] && $moment(date[0]).format("DD MMM YYYY") }} -
            {{ date[1] && $moment(date[1]).format("DD MMM YYYY") }}
        </span>
    </h2>

    <div class="lg:max-w-xs mt-4">
        <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <client-only>
                    <font-awesome-icon :icon="['fas', 'search']" class="text-[14px]" />
                </client-only>
            </div>
            <input type="text"
                class="block w-full px-4 lg:py-2 py-3 ps-8 text-sm text-gray-900 border border-black rounded-lg bg-white ffocus:border-blue-500"
                placeholder="Cari berdasarkan nama dll." />
        </div>
    </div>

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
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
                    <td class="flex items-center px-6 py-3">
                        <button class="text-green-500 underline">
                            Chat Reseller
                        </button>
                    </td>
                </tr>
                <tr class="bg-white border-b hover:bg-white text-gray-500">
                    <td class="px-6 py-3">
                        2
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
                    <td class="flex items-center px-6 py-3">
                        <button class="text-green-500 underline">
                            Chat Reseller
                        </button>
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
import ApexCharts from 'vue3-apexcharts'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { ref, onMounted } from 'vue';

const date = ref([]);

onMounted(() => {
    const today = new Date();
    date.value = [today, today];
})
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
        categories: ['1 Jan', '2 Feb', '3 Mar', '2 Apr', '10 May', '2 Jun', '2 Jul'],
        tooltip: {
            enabled: false
        }
    },
    yaxis: {
        min: 0,
        tickAmount: 3,
    },
    tooltip: {
        custom: function({ series, seriesIndex, dataPointIndex, w }) {
            const date = new Date(w.globals.labels[dataPointIndex]).toLocaleDateString('en-GB', {
                day: 'numeric', month: 'short', year: 'numeric'
            });
            const value = series[seriesIndex][dataPointIndex];
            return `
                <div class="p-3 rounded-lg">
                    <p class="font-light">
                        Tanggal: <span class="font-medium">${date}</span>
                    </p>
                    <p class="font-light mt-2">
                        Total Reseller: <span class="font-medium">${value}</span>
                    </p>
                </div>
            `;
        }
    },
    colors: ['#E8B5BA'],
})

const chartSeries = ref([
    {
        name: 'Sales',
        data: [87, 76, 125, 50, 300, 60, 0]
    }
])
</script>

<style scoped lang="scss"></style>