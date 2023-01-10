import axios from "axios";

const API_KEY = "4889c7fc09a04b817fef71c4bba4332f";

const URL = "https://api.openweathermap.org/data/2.5";

const api = axios.create({
  baseURL: URL,
  params: {
    appid: API_KEY,
  },
});

export const apiWeather = (lat, lon) => {
  return new Promise((resolve) => {
    const config = {
      method: "get",
      url: "/weather",
      params: {
        lat: lat,
        lon: lon,
      },
    };
    api(config)
      .then((res) => {
        resolve({ data: res.data, error: null });
      })
      .catch((error) => {
        resolve({ data: null, error: error });
      });
  });
};

export const apiForecast = (lat, lon) => {
  return new Promise((resolve) => {
    const config = {
      method: "get",
      url: "/forecast",
      params: {
        lat: lat,
        lon: lon,
      },
    };
    api(config)
      .then((res) => {
        resolve({ data: res.data, error: null });
      })
      .catch((error) => {
        resolve({ data: null, error: error });
      });
  });
};
