<script lang="ts" setup>
import Heading from '../components/Heading.vue'
import Box from '../components/ContentBox.vue'

const services = [
    {
        title: 'システム開発',
        slug: 'devlop',
        summary: '事業を進める上でアプリケーションの活用は重要です。既存のサービスで自社の事業に最適なアプリが見つからない、もっと細かいところを最適化したいといったご要望にお答えします。',
        thumbnail: 'code',
    },
    {
        title: 'ウェブ制作',
        slug: 'web',
        summary: '現在、ホームページを作成するならば簡単で無料、もしくは低価格で作成できるサービスはあります。しかし、本当に大切なのは中身です。どのような内容を掲載するか迷っているならばご相談ください。',
        thumbnail: 'site',
    },
    {
        title: 'Google Maps対策',
        slug: 'meo',
        summary: '店舗をお持ちの事業者様にとって欠かせないのがGoogle Maps対策です。現在多くの方がGoogle Mapsを使って目的地を探しています。対策をしっかりと行い、機会損失を減らしていきましょう。',
        thumbnail: 'geo',
    },
]
</script>

<template>
    <div id="services" class="services">
        <div class="container">
            <div class="services-box">
                <Heading subscript="SERVICES" heading="企業を多角的にサポートするサービス" />

                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                    <Box v-for="service in services" :title="service.title" :summary="service.summary"
                        :slug="service.title" :imagePath="'/src/assets/images/services/'" :thumbnail="service.thumbnail + '.svg'" :classes="'mt-8 md:mt-2'" />
                </div>
            </div>
        </div>
    </div>
</template>
