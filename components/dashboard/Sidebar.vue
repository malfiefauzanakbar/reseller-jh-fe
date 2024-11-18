<template>
    <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
        <div class="px-3 py-3 lg:px-5 lg:pl-3">
            <div class="flex items-center justify-between">
                <div class="flex items-center justify-start rtl:justify-end">
                    <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar"
                        aria-controls="logo-sidebar" type="button"
                        class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                        <span class="sr-only">Open sidebar</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path clip-rule="evenodd" fill-rule="evenodd"
                                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
                            </path>
                        </svg>
                    </button>
                    <div class="flex ms-2 md:me-24">
                        <nuxt-img src="/images/logo-no-title.webp" class="mr-2" width="50" title="" alt=""
                            loading="lazy" />
                        <span class="self-center text-xl font-medium sm:text-2xl whitespace-nowrap">
                            Jims Honey
                        </span>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="flex items-center ms-3">
                        <div>
                            <Menu>
                                <MenuButton
                                    class="flex items-center text-sm gap-2 rounded-full"
                                >
                                <img class="w-8 h-8 rounded-full border border-gray-300"
                                    src="/public/images/logo-no-title.webp"
                                    alt="user photo">
                                    <div class="text-left">
                                        <p class="text-sm font-medium leading-4">
                                            Jhon Jontor
                                        </p>
                                        <p class="text-xs text-gray-400">
                                            Super Admin
                                        </p>
                                    </div>
                                </MenuButton>
                                <MenuItems
                                    class="absolute right-2 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-10 px-2 py-1.5"
                                >
                                    <MenuItem>
                                        <button class="text-red-500 w-full text-left hover:bg-red-50 p-2 rounded-md">
                                            Kelaur
                                        </button>
                                    </MenuItem>
                                </MenuItems>
                            </Menu>
                        </div>
                        <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow"
                            id="dropdown-user">
                            <ul class="py-1" role="none">
                                <li>
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-white"
                                        role="menuitem">Dashboard</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-white"
                                        role="menuitem">Settings</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-white"
                                        role="menuitem">Earnings</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-white"
                                        role="menuitem">Sign out</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <aside id="logo-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen pt-24 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0"
        aria-label="Sidebar">
        <div class="h-full px-3 pb-4 overflow-y-auto bg-white">
            <ul class="space-y-4 font-normal">
                <li>
                    <NuxtLink to="/dashboard"
                        class="flex items-center p-2.5 text-gray-700 rounded-lg  hover:bg-[#FCF9FF] hover:text-[#E8B5BA]"
                        :class="{ active: isActiveRoute('/dashboard') }"
                    >
                        <client-only>
                            <font-awesome-icon :icon="['fas', 'home']" class="text-[16px]" />
                        </client-only>
                        <span class="ms-3">Dashboard</span>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/dashboard/user-unread"
                        class="flex items-center p-2.5 text-gray-700 rounded-lg  hover:bg-[#FCF9FF] hover:text-[#E8B5BA]"
                        :class="{ active: isActiveRoute('/dashboard/user-unread') }"
                    >
                        <client-only>
                            <font-awesome-icon :icon="['fas', 'user-xmark']" class="text-[16px]" />
                        </client-only>
                        <span class="ms-3">User Belum Dichat</span>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/dashboard/user-read"
                        class="flex items-center p-2.5 text-gray-700 rounded-lg  hover:bg-[#FCF9FF] hover:text-[#E8B5BA]"
                        :class="{ active: isActiveRoute('/dashboard/user-read') }"
                    >
                        <client-only>
                            <font-awesome-icon :icon="['fas', 'user-check']" class="text-[16px]" />
                        </client-only>
                        <span class="ms-3">User Sudah Dichat</span>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/dashboard/setup-homepage"
                        class="flex items-center p-2.5 text-gray-700 rounded-lg  hover:bg-[#FCF9FF] hover:text-[#E8B5BA]"
                        :class="{ active: isActiveRoute('/dashboard/setup-homepage') }"
                    >
                        <client-only>
                            <font-awesome-icon :icon="['fas', 'desktop']" class="text-[16px]" />
                        </client-only>
                        <span class="ms-3">Setting Home Page</span>
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </aside>
</template>

<script setup>
    import { useRoute } from 'vue-router'
    import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

    const route = useRoute()
    const isActiveRoute = (path) => {
        return route.path === path
    }
</script>

<style lang="scss" scoped>
    .active{
        color: #E8B5BA;
        background: #FCF9FF;
    }
</style>