<template>
    <ClientOnly>
        <apexchart width="30%" type="donut" :options="chartOptions" :series="chartData"></apexchart>
    </ClientOnly>
</template>
  
<script setup lang="ts">

const chartData = [21, 23, 19, 14, 6]

const chartOptions = {
    chart: {
        type: 'donut',
        width: '100%',
        height: 400
    },
    dataLabels: {
        enabled: false,
    },
    plotOptions: {
        pie: {
            customScale: 0.8,
            donut: {
                size: '75%',
            },
            offsetY: 20,
        },
        stroke: {
            colors: undefined
        }
    },
    //   colors: colorPalette,
    title: {
        text: 'Department Sales',
        style: {
            fontSize: '18px'
        }
    },

    labels: ['Clothing', 'Food Products', 'Electronics', 'Kitchen Utility', 'Gardening'],
    legend: {
        position: 'left',
        offsetY: 80
    }
}
</script>