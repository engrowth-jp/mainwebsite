<script setup lang="ts">
import Header from './layouts/Header.vue'
import MainVisual from './layouts/MainVisual.vue'
import Lead from './layouts/Lead.vue'
/*
const menuList = Array.from(headings).map(element => {
  return (element as HTMLElement).innerText
})
*/
</script>

<template>
  <Header class="block" pageTitle="engrowth" />
  <MainVisual />
  <Lead />
</template>

<style>
.container {
  padding-top: 3rem;
  padding-bottom: 3rem;
}
</style>
