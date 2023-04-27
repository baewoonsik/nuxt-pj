// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["bootstrap/dist/css/bootstrap.min.css"],
  modules: ["@pinia/nuxt"],
  plugins: [
    { src: "~/plugins/apexcharts.client.ts", mode: "client", ssr: false },
  ],
  components: true,
  // runtimeConfig: {
  //   public: {
  //     baseURL: process.env.API_BASE_URL,
  //     privateKey: process.env.API_PRIVATE_KEY,
  //   },
  // },
});
