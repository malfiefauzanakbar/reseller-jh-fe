<template>
    <div class="flex justify-center mt-4">
        <button @click="changePage(1)" :disabled="currentPage === 1"
            class="px-0 py-0 mx-1 rounded disabled:opacity-50">
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 16-4-4 4-4m-6 8-4-4 4-4"/>
            </svg>
        </button>

        <button @click="prevPage" :disabled="currentPage === 1"
            class="px-0 py-0 mx-1 disabled:opacity-50">
            <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/>
            </svg>
        </button>

        <button v-if="currentPage > 4" @click="changePage(1)" class="bg-neutral-700 px-2.5 py-1 mx-1 rounded-full">
            1
        </button>

        <span v-if="currentPage > 4">...</span>

        <button v-for="page in pages" :key="page" @click="changePage(page)"
            :class="page === currentPage ? 'bg-[#b07f46] text-white' : 'bg-neutral-700'" class="w-7 h-7 mx-1 rounded-full">
            {{ page }}
        </button>

        <span v-if="currentPage < lastPage - 3">...</span>

        <button v-if="currentPage < lastPage - 3" @click="changePage(lastPage)"
            class="w-7 h-7 mx-1 bg-neutral-700 rounded-full">
            {{ lastPage }}
        </button>

        <button @click="nextPage" :disabled="currentPage === lastPage"
            class="px-0 py-1 mx-1 rounded disabled:opacity-50">
            <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
            </svg>
        </button>

        <button @click="changePage(lastPage)" :disabled="currentPage === lastPage"
            class="px-0 py-0 mx-1 rounded disabled:opacity-50">
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 16 4-4-4-4m6 8 4-4-4-4"/>
            </svg>
        </button>
    </div>
</template>

<script setup>
import { computed, defineProps, defineEmits } from 'vue';

const props = defineProps({
    currentPage: {
        type: Number,
        required: true
    },
    lastPage: {
        type: Number,
        required: true
    }
});

const emit = defineEmits(['pageChange']);

const pages = computed(() => {
    const range = 3;
    const start = Math.max(props.currentPage - range, 1);
    const end = Math.min(props.currentPage + range, props.lastPage);

    return Array.from({ length: end - start + 1 }, (v, k) => start + k);
});

const changePage = (page) => {
    emit('pageChange', page);
};

const nextPage = () => {
    if (props.currentPage < props.lastPage) {
        changePage(props.currentPage + 1);
    }
};

const prevPage = () => {
    if (props.currentPage > 1) {
        changePage(props.currentPage - 1);
    }
};
</script>