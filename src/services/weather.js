import axios from "axios";

const weather_api_key = "e8af3adb310740a489ee027d7b5a0e96";

const weather_base_url = "https://api.openweathermap.org/data/2.5";

export const WeatherService = axios.create({
  baseURL: weather_base_url,
  params: {
    appid: weather_api_key,
  },
  headers: { "Content-Type": "application/json" },
});
