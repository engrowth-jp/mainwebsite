<script lang="ts" setup>
defineProps<{
    subscript?: string,
    heading: string,
    description?: string
}>()
</script>

<template>
    <header>
        <h2 class="text-2xl font-heading font-bold">
            <p v-if="subscript" class="text-sm">{{ subscript }}</p>
            {{ heading }}
        </h2>

        <section class="pt-2 mt-3">
            <slot></slot>
        </section>
    </header>
</template>
