import React, { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
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
      navigator.geolocation.getCurrentPosition(async (position) => {
        setGeoInfo({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        WeatherService({
          url: `/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}`,
          method: "get",
        })
          .then((res) => {
            setData(res.data);
          })
          .catch((err) => console.log({ err }));
        WeatherService({
          url: `/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}`,
          method: "get",
        })
          .then((res) => {
            setForcast(res.data);
          })
          .catch((err) => console.log({ err }));
      });
    } else {
      console.log("Not Available");
    }
  }, []);

  useEffect(() => {
    console.log(geoInfo);
  }, [geoInfo]);

  return (
    <div className={geoInfo && data && forcast ? "" : "overflow-hidden"}>
      {geoInfo && data && forcast ? (
        <div className="flex bg-weathergray-100">
          {!isMobile && (
            <div className="bg-white shadow-sm" style={{ width: "440px" }}>
              <Sidebar data={data} />
            </div>
          )}
          <div className="w-full">
            <Main data={data} forcast={forcast} />
          </div>
        </div>
      ) : (
        <LoadingPage />
      )}
    </div>
  );
}

export default App;
