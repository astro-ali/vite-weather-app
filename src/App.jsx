import React, { useState, useEffect } from "react";
import "./App.css";
import LoadingPage from "./components/LoadingPage";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import WeatherService from "./services";

function App() {
  const [geoInfo, setGeoInfo] = useState(null);
  const [data, setData] = useState(null);
  const [forcast, setForcast] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      // mockup timeout, it's not nessery
      navigator.geolocation.getCurrentPosition(async (position) => {
        setGeoInfo({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        const res = await WeatherService({
          url: `/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}`,
          method: "get",
        });
        const forcastRes = await WeatherService({
          url: `/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}`,
          method: "get",
        });
        setData(res.data);
        setForcast(forcastRes.data);
      });
    } else {
      console.log("Not Available");
    }
  }, []);

  useEffect(() => {
    console.log(geoInfo);
  }, [geoInfo]);

  return (
    <>
      {geoInfo && data && forcast ? (
        <div className="flex bg-weathergray-100">
          <div className="bg-white shadow-sm" style={{ width: "440px" }}>
            <Sidebar data={data} />
          </div>
          <div className="w-full">
            <Main data={data} forcast={forcast} />
          </div>
        </div>
      ) : (
        <LoadingPage />
      )}
    </>
  );
}

export default App;
