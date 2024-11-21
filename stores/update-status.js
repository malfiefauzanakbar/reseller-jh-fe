import { defineStore } from 'pinia';
import { useNuxtApp } from '#app';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export const useUpdateStatusStore = defineStore('updateStatus', () => {
    const { $api } = useNuxtApp();

    const updateStatus = async (status, id) => {
        status.isLoading = true;
        try {
            var data = {
                status_id: id,
            }
            const response = await $api.put(`/reseller/${status.id}`, data);
            if (response) {
                status.isLoading = false;
            }
        } catch (error) {
            status.isLoading = false;
            toast('Terjadi kesalahan', {
                theme: "dark",
                type: "warning",
                transition: "slide",
                dangerouslyHTMLString: true,
            });
        }
    };

    return { updateStatus };
});
