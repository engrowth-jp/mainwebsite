<script setup lang="ts">
defineProps<{
    text: string,
}>()
</script>

<template>
    <button class="bg-cyan-600 hover:bg-cyan-800 text-white py-1 px-4">
        {{ text }}
    </button>
</template>
