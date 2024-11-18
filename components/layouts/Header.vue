<template>
    <header :class="[
        'header left-0 top-0 z-20 flex w-full items-center lg:p-0 p-2',
        sticky ? 'dark:bg-gray-dark dark:shadow-sticky-dark fixed z-40 bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition shadow-sm' : 'absolute bg-transparent'
    ]">
        <div class="container lg:px-4 px-0">
            <div class="relative lg:-mx-4 flex items-center justify-between">
                <div class="max-w-full lg:px-4 xl:mr-12">
                    <nuxt-img src="/images/logo.webp" class="mr-2" width="60" title="" alt="" loading="lazy" />
                </div>
                <div class="flex w-full items-center justify-between px-4">
                    <div>
                        <button
                            ref="buttonRef"
                            @click="toggleNavbar"
                            id="navbarToggler"
                            aria-label="Mobile Menu"
                            class="absolute right-0 top-1/2 block translate-y-[-50%] rounded-lg px-2 py-[6px] lg:hidden">
                            <span :class="[
                                'relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-black',
                                navbarOpen ? ' top-[7px] rotate-45' : ''
                            ]" />
                            <span :class="[
                                'relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-black',
                                navbarOpen ? 'opacity-0' : ''
                            ]" />
                            <span :class="[
                                'relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-black',
                                navbarOpen ? ' top-[-8px] -rotate-45' : ''
                            ]" />
                        </button>
                        <nav
                            ref="navbarRef"
                            id="navbarCollapse"
                            :class="[
                                'navbar absolute right-0 z-30 w-[250px] rounded-xl border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 shadow-md lg:shadow-none lg:mt-0 mt-1.5',
                                navbarOpen ? 'visibility top-full opacity-100' : 'invisible top-[120%] opacity-0'
                            ]">
                            <ul class="block lg:flex lg:space-x-12">
                                <li class="group relative"
                                    :class="{ 'text-[#E8B5BA] font-medium': activeSection === 'home' }">
                                    <a @click.prevent="scrollToSection('home')"
                                        class="flex py-2 text-lg lg:mr-0 lg:inline-flex lg:px-0 lg:py-4 dark:hover:text-[#E8B5BA] transition duration-300 ease-in-out cursor-pointer">
                                        Home
                                    </a>
                                </li>
                                <li class="group relative"
                                    :class="{ 'text-[#E8B5BA] font-medium': activeSection === 'journey' }">
                                    <a @click.prevent="scrollToSection('journey')"
                                        class="flex py-2 text-lg lg:mr-0 lg:inline-flex lg:px-0 lg:py-4 dark:hover:text-[#E8B5BA] transition duration-300 ease-in-out cursor-pointer">
                                        Informasi
                                    </a>
                                </li>
                                <li class="group relative"
                                    :class="{ 'text-[#E8B5BA] font-medium': activeSection === 'fasilitas' }">
                                    <a @click.prevent="scrollToSection('fasilitas')"
                                        class="flex py-2 text-lg lg:mr-0 lg:inline-flex lg:px-0 lg:py-4 dark:hover:text-[#E8B5BA] transition duration-300 ease-in-out cursor-pointer">
                                        Fasilitas
                                    </a>
                                </li>
                                <li class="group relative"
                                    :class="{ 'text-[#E8B5BA] font-medium': activeSection === 'biaya-flow' }">
                                    <a @click.prevent="scrollToSection('biaya-flow')"
                                        class="flex py-2 text-lg lg:mr-0 lg:inline-flex lg:px-0 lg:py-4 dark:hover:text-[#E8B5BA] transition duration-300 ease-in-out cursor-pointer">
                                        Biaya & Flow
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div class="flex items-center justify-end pr-10 lg:pr-0">
                        <a href="https://jimshoneyofficial.co.id" target="_blank"
                            class="bg-[#E8B5BA] px-5 lg:py-2.5 py-2 rounded-lg lg:font-medium shadow-md shadow-gray-300 transition-all text-white">
                            Go to Website
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <div class="w-11 h-11 bg-[#E8B5BA] rounded-full p-2 flex items-center justify-center fixed right-5 bottom-5 cursor-pointer z-50 shadow-lg"
        @click.prevent="scrollToSection('home')" v-if="activeSection !== 'home'">
        <client-only>
            <font-awesome-icon :icon="['fa', 'angle-up']" class="text-2xl text-white" />
        </client-only>
    </div>
</template>

<script setup>
import { useScrollToSection } from '~/composables/useScrollToSection';

const { activeSection, scrollToSection } = useScrollToSection();
const navbarOpen = ref(false);
const toggleNavbar = () => {
    navbarOpen.value = !navbarOpen.value;
};

const sticky = ref(false);
const handleStickyNavbar = () => {
    sticky.value = window.scrollY >= 80;
};

const navbarRef = ref(null);
const buttonRef = ref(null);

const closeMenuOnClickOutside = (event) => {
    if (
        navbarRef.value && 
        !navbarRef.value.contains(event.target) && 
        buttonRef.value && 
        !buttonRef.value.contains(event.target)
    ) {
        navbarOpen.value = false;
    }
};

onMounted(() => {
    window.addEventListener('scroll', handleStickyNavbar);

    document.addEventListener('click', closeMenuOnClickOutside);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleStickyNavbar);

    document.removeEventListener('click', closeMenuOnClickOutside);
});
</script>
