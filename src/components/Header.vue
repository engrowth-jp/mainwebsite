<template>
  <div>
    <h1 class="text-3xl font-bold">{{ msg }}</h1>
  </div>
</template>

<script setup lang="ts">
defineProps<{ msg: string }>()
</script>
