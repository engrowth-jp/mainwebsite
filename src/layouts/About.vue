<script setup lang="ts">
import Heading from '../components/Heading.vue'

const about = {
    '社名': '株式会社engrowth',
    '設立': '2020年2月',
    '代表者': '代表取締役 松井真吾',
    '資本金': '30万円',
    '事業内容': 'ソフトウェア開発',
    '取引銀行': '青和信用組合',
}
</script>

<template>
<div id="about" class="about container">
    <Heading heading="企業概要" subscript="ABOUT"></Heading>

    <table class="w-full sm:text-lg border-collapse">
        <tr v-for="item, key, index in about" :class="index % 2 != 0 ? 'bg-gray-100' : ''">
            <td class="w-36 pl-4 py-3 align-middle border border-slate-300">{{ key }}</td>
            <td class="w-max pl-4 align-middle border border-slate-300">{{ item }}</td>
        </tr>
    </table>
</div>
</template>
