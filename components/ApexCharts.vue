<template>
    <div>
        <apexchart width="500" type="bar" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>

<script setup lang="ts">

const series = [
    {
        name: "series-1",
        data: [30, 40, 35, 50, 49, 60, 70, 91],
    },
]

const chartOptions = {
    chart: {
        id: "vuechart-example",
    },
    xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    },
}

// const isClient = ref(false)

// if (process.client) {
//     isClient.value = true
// }

</script>

<style></style>