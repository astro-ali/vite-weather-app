import React from "react";
import CityBanner from "./CityBanner";
import SidebarWeatherInfo from "./SidebarWeatherInfo";
import WeatherToday from "./WeatherToday";

const Sidebar = () => {
  return (
    <div className="p-10 sidebar h-screen overflow-auto custom-scroll">
      <WeatherToday />
      <SidebarWeatherInfo />
      <CityBanner />
    </div>
  );
};

export default Sidebar;
