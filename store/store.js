import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStore = defineStore(
    'store',
    () => {
        const name = ref('')
        return { name }
    },
    {
        persist: true
    }
)
