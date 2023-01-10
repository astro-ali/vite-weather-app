import React, { useState, useEffect } from "react";
import { apiForecast, apiWeather } from "./api";
import "./App.css";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import LoadingPage from "./components/LoadingPage";

function App() {
  const [geo, setGeo] = useState(null);
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    console.log({ weather });
  }, [weather]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log({ position });
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      apiWeather(lat, lon).then((res) => {
        setWeather(res.data);
      });
      apiForecast(lat, lon).then((res) => {
        setForecast(res.data.list);
      });
      setGeo({
        lat,
        lon,
      });
    });
  }, []);

  return (
    <div>
      {geo && weather && forecast ? (
        <div className="flex bg-weathergray-100">
          <div className="bg-white shadow-sm" style={{ width: "440px" }}>
            <Sidebar weather={weather} />
          </div>
          <div className="w-full">
            <Main />
          </div>
        </div>
      ) : (
        <LoadingPage />
      )}
    </div>
  );
}

export default App;
