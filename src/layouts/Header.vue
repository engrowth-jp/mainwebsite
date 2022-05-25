<script setup lang="ts">
import Button from '../components/FormButton.vue'
defineProps<{
  pageTitle: string,
}>()

const menuList: {link: string, text: string}[] = [
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
  <header>
    <div id="header" class="relative lg:container flex justify-between items-center px-4 py-3">
      <div class="title">
        <h1 class="text-2xl font-bold font-heading">
          <img src="/src/assets/images/logo.svg" :alt="pageTitle" class="h-8">
        </h1>
      </div>

      <div class="py-1 hidden md:block">
        <nav>
          <ul>
            <li class="inline-block px-5" v-for="menu in menuList"><a :href="menu.link">{{ menu.text }}</a></li>
          </ul>
        </nav>
      </div>

      <div>
        <Button>
          <span class="hidden md:inline">お問い合わせ</span>
          <span class="md:hidden">
            <img src="/src/assets/images/envelope.svg" alt="お問い合わせ" class=" w-5"></span>
        </Button>
      </div>
    </div>
  </header>
</template>
