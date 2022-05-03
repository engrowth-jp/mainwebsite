<script setup lang="ts">
import Header from './layouts/Header.vue'
import MainVisual from './layouts/MainVisual.vue'
import { ref, onMounted } from 'vue'
/*
const menuList = Array.from(headings).map(element => {
  return (element as HTMLElement).innerText
})
*/
</script>

<template>
  <Header class="block" pageTitle="engrowth" />
  <MainVisual />
</template>
