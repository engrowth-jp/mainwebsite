<script setup lang="ts">
defineProps<{
    title: string,
    slug: string,
    summary: string,
    thumbnail?: string,
    classes?: string,
    imagePath?: string,
}>()
</script>

<template>
<div class="box-wrapper">
    <div box-content>
        <header class="mb-1">
            <img :src="imagePath + thumbnail" :alt="title" v-if="thumbnail" class="block w-24 ml-auto mr-8" :class="classes">
            <h3 class="font-bold text-lg">{{ title }}</h3>
        </header>

        <section>
            {{ summary }}
        </section>
    </div>
</div>
</template>
