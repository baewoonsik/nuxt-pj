import { defineStore } from "pinia";
import axios from "axios";

interface WeatherData {
  stnNm: string; // 지점명
  tm: string; // 일시
  avgTa: string; // 평균기온
  avgRhm: string; // 평균 상대습도
  sumRn: string; // 일강수량
  maxWs: string; // 최대 풍속
}

// 향후 .env 파일로 빼기
const baseURL = "https://apis.data.go.kr/1360000/AsosDalyInfoService";
const privateKey =
  "JB08o2MkBwznc9Zxs1HmJjv1VFxdsesKrng4Ty9li2FWreVQhY7qQ88C2K7ul6%2FyC1bBGkad%2BLof7P6VM9raZg%3D%3D";

export const useWeatherStore = defineStore("weather", {
  state: () => ({
    weatherData: [] as WeatherData[],
  }),
  actions: {
    async fetchWeatherData(startDt: string, endDt: string, stnIds: string) {
      const { data } = await axios.get<{
        response: { body: { items: { item: WeatherData[] } } };
      }>(
        `${baseURL}/getWthrDataList?serviceKey=${privateKey}&pageNo=1&numOfRows=10&dataType=JSON&dataCd=ASOS&dateCd=DAY&startDt=${startDt}&endDt=${endDt}&stnIds=${stnIds}`
      );

      const weatherData = data.response.body.items.item;

      this.weatherData = weatherData;
      console.log(this.weatherData);
    },
  },
});
