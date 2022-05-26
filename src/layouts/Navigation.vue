<script setup lang="ts">
defineProps<{
    additionalClass?: string,
}>()
const menuList: { link: string, text: string }[] = [
    {
        link: '#services',
        text: 'サービス'
    },
    {
        link: '#examples',
        text: '事例'
    },
    {
        link: '#about',
        text: '会社情報'
    },
]
</script>

<template>
    <nav>
        <div class="py-1">
            <ul class="flex justify-center" :class="additionalClass">
                <li class="px-5 sm:px-8" v-for="menu in menuList">
                    <a :href="menu.link" class="hover:border-b-[2px] py-3">{{ menu.text }}</a>
                </li>
            </ul>
        </div>
    </nav>
</template>
