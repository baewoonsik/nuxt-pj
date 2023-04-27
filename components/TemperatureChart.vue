<template>
    <ClientOnly>
        <apexchart width="800" type="bar" :options="chartOptions" :series="chartData"></apexchart>
    </ClientOnly>
</template>
  
<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
    categories: string[]
    data: { name: string, data: number[] }[]
}>()

const chartData = computed(() => {
    const { categories, data } = props;

    return data.map((item) => {
        return {
            name: item.name,
            data: item.data.map((value, index) => {
                return {
                    x: categories[index],
                    y: value,
                };
            }),
        };
    });
});

const chartOptions = {
    chart: {
        type: "bar",
        height: 350,
    },
    title: {
        text: 'High & Low Temperature',
        align: 'left'
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: "90%",
            endingShape: "rounded",
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
    },
    xaxis: {
        categories: props.categories,
    },
    yaxis: {
        title: {
            text: "Temperature(°C)",
        },
    },
    fill: {
        opacity: 1,
    },
};
</script>