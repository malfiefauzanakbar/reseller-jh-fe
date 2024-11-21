// stores/list.js
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useNuxtApp } from '#app';

export const useListStore = defineStore('list', () => {
  const { $api, $moment } = useNuxtApp();
  
  // Reactive state variables
  const lists = ref([]);
  const pagination = ref({
    page: 1,
    page_size: 10,
    total_pages: 0,
    total_items: 0,
  });
  const search = ref('');
  const date = ref([]);
  const type = ref(1);

  // Function to fetch lists
  const getLists = async (page = 1) => {
    try {
      const start_date = date.value[0] ? $moment(date.value[0]).format('YYYY-MM-DD') : null;
      const end_date = date.value[1] ? $moment(date.value[1]).format('YYYY-MM-DD') : null;

      const response = await $api.get('/reseller', {
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
        isLoading: false
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
      console.error('Error fetching reseller lists:', error);
    }
  };

  // Return store state and methods
  return {
    lists,
    pagination,
    search,
    date,
    type,
    getLists,
  };
});
