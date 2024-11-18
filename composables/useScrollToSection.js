import { ref, onMounted, onBeforeUnmount } from 'vue';

export function useScrollToSection() {
    const activeSection = ref('');

    function scrollToSection(id) {
        const target = document.getElementById(id);
        const offset = 90;
        if (target) {
            const elementPosition = target.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }

    function observeSections() {
        const sections = ['home', 'journey', 'fasilitas', 'biaya-flow'];
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        activeSection.value = entry.target.id;
                    }
                });
            },
            { rootMargin: '-50% 0px -50% 0px' }
        );

        sections.forEach((id) => {
            const section = document.getElementById(id);
            if (section) observer.observe(section);
        });

        onBeforeUnmount(() => {
            observer.disconnect();
        });
    }

    onMounted(observeSections);

    return {
        activeSection,
        scrollToSection
    };
}
