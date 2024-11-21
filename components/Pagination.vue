<template>
    <div class="mt-3 flex items-center">
        <p class="text-sm text-gray-600">
            Menampilkan <span class="font-medium text-black">1-{{ pageSize }}</span> Data dari <span
                class="font-medium text-black">{{ totalItem }}</span> Data
        </p>
        <div class="ms-auto flex items-center gap-4">
            <div class="flex space-x-2">
                <button class="w-8 h-8 bg-gray-200 rounded-full disabled:text-gray-400" :disabled="currentPage === 1"
                    @click="goToPage(currentPage - 1)">
                    <client-only>
                        <font-awesome-icon :icon="['fas', 'angle-left']" class="text-[14px]" />
                    </client-only>
                </button>
                <button v-for="page in pages" :key="page" :class="[
                    'w-8 h-8 rounded-full',
                    page === currentPage ? 'bg-primaryColor text-white shadow-md' : 'bg-gray-200',
                    page === '...' ? 'cursor-default' : ''
                ]" :disabled="page === '...'" @click="page !== '...' && goToPage(page)">
                    {{ page }}
                </button>
                <button class="w-8 h-8 bg-gray-200 rounded-full disabled:text-gray-400" :disabled="currentPage === totalPages"
                    @click="goToPage(currentPage + 1)">
                    <client-only>
                        <font-awesome-icon :icon="['fas', 'angle-right']" class="text-[14px]" />
                    </client-only>
                </button>
            </div>
            <div class="relative">
                <select id="rows" name="rows" as="select"
                    class="appearance-none block w-28 p-2 text-sm border rounded-lg bg-white" v-model="selectedPageSize"
                    @change="updatePageSize">
                    <option v-for="size in [10, 20, 30, 40, 50, 100]" :key="size" :value="size">
                        {{ size }} Rows
                    </option>
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
import { ref, computed } from 'vue'

const props = defineProps({
    currentPage: {
        type: Number,
        required: true,
    },
    totalPages: {
        type: Number,
        required: true,
    },
    pageSize: {
        type: Number,
        required: true,
    },
    totalItem: {
        type: Number,
        required: true,
    },
})

const emit = defineEmits(['page-change'])

const pages = computed(() => {
    const totalPages = props.totalPages;
    const currentPage = props.currentPage;
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages = [];

    if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages);
    } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
    } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
    }

    return pages;
});


const selectedPageSize = ref(props.pageSize)

const goToPage = (page) => {
    if (page > 0 && page <= props.totalPages) {
        emit('page-change', page)
    }
}

const updatePageSize = () => {
    emit('page-size-change', Number(selectedPageSize.value))
}
</script>


<style scoped>
</style>
