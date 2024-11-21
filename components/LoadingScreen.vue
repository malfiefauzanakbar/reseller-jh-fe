<template>
    <div v-if="isVisible" class="w-full h-screen fixed top-0 left-0 bg-white z-50 flex justify-center items-center">
        <div class="relative inline-flex">
            <div class="w-8 h-8 bg-primaryColor rounded-full"></div>
            <div class="w-8 h-8 bg-primaryColor rounded-full absolute top-0 left-0 animate-ping"></div>
            <div class="w-8 h-8 bg-primaryColor rounded-full absolute top-0 left-0 animate-pulse"></div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    isVisible: {
        type: Boolean,
        default: false,
    },
});
</script>