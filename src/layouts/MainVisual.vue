<script setup lang="ts">
import Navigation from './Navigation.vue'
</script>

<template>
    <div
        class="main-visual md:container bg-cover bg-bottom bg-[rgba(0,0,0,0.3)] bg-blend-darken bg-[url(/src/assets/images/keyvisuals/keyvisual_sm.png)] md:bg-[url(/src/assets/images/keyvisuals/keyvisual_md.png)] lg:bg-[url(/src/assets/images/keyvisuals/keyvisual_lg.png)] h-[60vh] min-h-[360px] md:min-h-[640px] 2xl:min-h-[800px] flex justify-center items-center">

        <div class="text-white">
            <h2 class="font-heading text-4xl text-center mb-14">個人規模からの<br class="sm:hidden">システム開発</h2>
            <Navigation class="text-lg" />
        </div>
    </div>
</template>
