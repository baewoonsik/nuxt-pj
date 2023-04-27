<template>
    <div v-if="isLoaded" style="width: 100%; height: 100%;">
        <TemperatureChart :categories="categories" :data="chartData" />
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
        name: "High Temperature",
        data: store.weatherData.map((item) => item.maxTa),
    },
    {
        name: "Low Temperature",
        data: store.weatherData.map((item) => item.minTa),
    },
]);

const isLoaded = computed(() => store.weatherData.length > 0);




onMounted(() => {
    store.fetchWeatherData('20230401', '20230410', '108')
});

</script>

<style></style>