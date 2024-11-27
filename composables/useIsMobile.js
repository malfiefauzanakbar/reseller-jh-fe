// composables/useIsMobile.js
import { ref, onMounted, onUnmounted } from 'vue'

export function useIsMobile() {
  const isMobile = ref(false)

  const checkIsMobile = () => {
    isMobile.value = window.innerWidth <= 768
  }

  onMounted(() => {
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', checkIsMobile)
  })

  return { isMobile }
}
