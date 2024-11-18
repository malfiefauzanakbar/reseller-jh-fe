// composables/useIsMobile.js
import { ref, onMounted, onUnmounted } from 'vue'

export function useIsMobile() {
  const isMobile = ref(false)

  // Fungsi untuk mengecek apakah layar mobile
  const checkIsMobile = () => {
    isMobile.value = window.innerWidth <= 768
  }

  // Panggil sekali saat komponen dimuat
  onMounted(() => {
    checkIsMobile()
    // Tambahkan listener untuk resize
    window.addEventListener('resize', checkIsMobile)
  })

  // Bersihkan event listener saat komponen dihancurkan
  onUnmounted(() => {
    window.removeEventListener('resize', checkIsMobile)
  })

  return { isMobile }
}
