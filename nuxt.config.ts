import { mode } from "process";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["bootstrap/dist/css/bootstrap.min.css"],
  modules: ["@pinia/nuxt"],
  plugins: ["~/plugins/apexcharts.client.ts"],
});
