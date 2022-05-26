<script setup lang="ts">
import LinkButton from '../components/LinkButton.vue'
defineProps<{
  pageTitle: string,
}>()

</script>

<template>
  <header class="sticky top-0 bg-[rgba(255,255,255,0.8)]">
    <div id="header" class="relative lg:container flex justify-between items-center px-4 py-3">
      <div class="title">
        <h1 class="text-2xl font-bold font-heading">
          <img src="/src/assets/images/logo.svg" :alt="pageTitle" class="h-8">
        </h1>
      </div>

      <div>
        <LinkButton class="block">
          <span class="hidden md:inline">お問い合わせ</span>
          <span class="md:hidden">
            <img src="/src/assets/images/envelope.svg" alt="お問い合わせ" class="w-5">
          </span>
        </LinkButton>
      </div>
    </div>
  </header>
</template>
