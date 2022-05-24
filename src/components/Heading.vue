<script lang="ts" setup>
defineProps<{
    subscript?: string,
    heading: string,
    description?: string
}>()
</script>

<template>
    <header>
        <h2 class="text-xl pb-2 mb-3 font-heading font-bold">
            <p v-if="subscript" class="text-sm">{{ subscript }}</p>
            {{ heading }}
        </h2>

        <section>
            <slot></slot>
        </section>
    </header>
</template>
