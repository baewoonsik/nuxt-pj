<template>
    <div v-if="isLoaded" style="width: 100%; height: 100%;">
        <WindChart :categories="categories" :data="chartData" />
    </div>
    <div v-else>
        <h1>Loading...</h1>
    </div>
</template>

<script setup lang="ts">

import { useWeatherStore } from '~/store';
import { computed, onMounted } from 'vue';

const store = useWeatherStore();

const categories = computed(() => store.weatherData.map((item) => item.tm));

const chartData = computed(() => [
    {
        name: "Max Wind Speed",
        data: store.weatherData.map((item) => item.maxWs),
    },
    {
        name: "Avarage Wind Speed",
        data: store.weatherData.map((item) => item.avgWs),
    },
]);

const isLoaded = computed(() => store.weatherData.length > 0);

onMounted(() => {
    store.fetchWeatherData('20230401', '20230410', '108')
});

</script>

<style></style>