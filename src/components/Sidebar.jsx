import React from "react";
import CityBanner from "./CityBanner";
import SidebarWeatherInfo from "./SidebarWeatherInfo";
import WeatherToday from "./WeatherToday";

const Sidebar = ({ weather }) => {
  return (
    <div className="p-10 sidebar h-screen overflow-auto custom-scroll">
      <WeatherToday data={weather} />
      <SidebarWeatherInfo data={weather} />
      <CityBanner />
    </div>
  );
};

export default Sidebar;
