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
            <slot></slot>
            <h3 class="font-bold text-lg">{{ title }}</h3>
        </header>

        <section>
            {{ summary }}
        </section>
    </div>
</div>
</template>
