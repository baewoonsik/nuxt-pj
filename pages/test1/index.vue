<template>
    <div style="width: 100%; height: 100%;">
        <h1>Weather</h1>
        <ul>
            <li v-for="(dataItem, index) in data" :key="index">
                <p>지점명: {{ dataItem.stnNm }}</p>
                <p>일시: {{ dataItem.tm }}</p>
                <p>평균기온: {{ dataItem.avgTa }}</p>
                <p>평균 상대습도: {{ dataItem.avgRhm }}</p>
                <p>일강수량: {{ dataItem.sumRn }}</p>
                <p>최대 풍속: {{ dataItem.maxWs }}</p>
            </li>
        </ul>
        <ApexCharts />
    </div>
</template>

<script setup lang="ts">

import { useWeatherStore } from '~/store';
import { computed, onMounted } from 'vue';

const store = useWeatherStore();

const data = computed(() => store.weatherData);

onMounted(() => {
    store.fetchWeatherData('20230401', '20230407', '108')
});

</script>

<style></style>