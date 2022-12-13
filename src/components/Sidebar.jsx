import React from "react";
import CityBanner from "./CityBanner";
import SidebarSearch from "./SidebarSearch";
import SidebarWeatherInfo from "./SidebarWeatherInfo";
import WeatherToday from "./WeatherToday";

const Sidebar = ({ data }) => {
  return (
    <div className="p-10 sidebar h-screen overflow-auto custom-scroll">
      <SidebarSearch />
      <WeatherToday data={data} />
      <SidebarWeatherInfo data={data} />
      <CityBanner data={data} />
    </div>
  );
};

export default Sidebar;
