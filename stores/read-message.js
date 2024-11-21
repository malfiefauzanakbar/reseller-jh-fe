import { defineStore } from 'pinia';
import { useNuxtApp } from '#app';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export const useReadMessageStore = defineStore('readMessage', () => {
    const { $api } = useNuxtApp();

    const readMessage = async (message) => {
        message.isLoading = true;
        try {
            const response = await $api.put(`/reseller/read/${message.id}`);
            if (response) {
                message.isLoading = false;
                const noWa = response.data.data.whatsapp_no;
                const waUrl = `https://wa.me/${noWa}`;
                window.open(waUrl, '_blank');
            }
        } catch (error) {
            message.isLoading = false;
            toast('Terjadi kesalahan', {
                theme: "dark",
                type: "warning",
                transition: "slide",
                dangerouslyHTMLString: true,
            });
        }
    };

    return { readMessage };
});
