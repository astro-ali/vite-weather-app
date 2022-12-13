import React from "react";
import { BiCloud } from "react-icons/bi";
import { RiWindyFill } from "react-icons/ri";
import { WiHumidity } from "react-icons/wi";

const SidebarWeatherInfo = ({ data }) => {
  const { weather, main, wind } = data;

  return (
    <div className="more-info-about-today flex flex-col gap-4">
      <div className="info-item flex items-center gap-1">
        <div className="info-icon" style={{ width: "16%" }}>
          <img
            src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
            alt="Weather Icon"
            width="60px"
            height="60px"
          />
        </div>
        <div className="info-text font-medium text-black">
          <p>{weather[0].description}</p>
        </div>
      </div>

      <div className="info-item flex items-center gap-1">
        <div className="info-icon" style={{ width: "16%" }}>
          <WiHumidity className="text-blue-500 text-3xl" />
        </div>
        <div className="info-text font-medium text-black">
          <p>Humidity - {main.humidity}%</p>
        </div>
      </div>

      <div className="info-item flex items-center gap-1">
        <div className="info-icon" style={{ width: "16%" }}>
          <RiWindyFill className="text-sky-500 text-2xl" />
        </div>
        <div className="info-text font-medium text-black">
          <p>Wind Speed - {wind.speed} km/h</p>
        </div>
      </div>
    </div>
  );
};

export default SidebarWeatherInfo;
