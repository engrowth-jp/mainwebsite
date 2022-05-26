<script setup lang="ts">
import Header from './layouts/Header.vue'
import MainVisual from './layouts/MainVisual.vue'
import Lead from './layouts/Lead.vue'
import Services from './layouts/Services.vue'
import Message from './layouts/Message.vue'
import About from './layouts/About.vue'
import Footer from './layouts/Footer.vue'
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
  <Services />
  <Message />
  <About />
  <Footer />
</template>

<style>
.container {
  padding-top: 4rem;
  padding-bottom: 4rem;
}
</style>
