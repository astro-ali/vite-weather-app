import React from "react";
import { useRecoilState } from "recoil";
import { TempTypeState } from "../atoms";
import { RiWindyFill } from "react-icons/ri";
import { WiHumidity } from "react-icons/wi";

const weatherconditionsMap = {
  Thunderstorm: "storms",
  Drizzle: "few-rains",
  Rain: "rainy",
  Snow: "rain-snow",
  Clear: "sunny",
  Clouds: "cloudy",
};

const WeatherForTodayMobile = ({ data }) => {
  const [tempType, setTempType] = useRecoilState(TempTypeState);

  const getWeatherConditionImage = (main) => {
    const imageName = weatherconditionsMap[main];
    if (imageName) return imageName;
    return "sunny";
  };

  const renderTemp = (temp, tempType) => {
    let calculatedTemp = 0;
    if (tempType === "c") {
      calculatedTemp = temp - 273.15;
      return calculatedTemp.toFixed(0);
    } else if (tempType === "f") {
      calculatedTemp = (temp - 273.15) * 1.8 + 32;
      return calculatedTemp.toFixed(0);
    }
  };

  const getDay = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return moment(date).format("dddd");
  };

  const getTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return moment(date).format("LT");
  };

  const { weather, main, wind } = data;

  return (
    <div className="bg-white shadow-md px-5 py-6 rounded-2xl">
      <div className="city-name self-start mb-2 text-xl font-semibold">
        <h2>{data.name + ", " + data.sys.country}</h2>
      </div>
      <div className="weather-status-image flex justify-center mt-3">
        <img
          src={`/images/weather-conditions/${getWeatherConditionImage(
            data.weather[0].main
          )}.png`}
          alt="Sunny"
          width="160px"
          height="160px"
        />
      </div>
      <div className="today-weather-temp mb-3 pl-7 mt-2 flex justify-center">
        <h2 className="text-9xl font-normal">
          {renderTemp(data.main.temp, tempType)}
        </h2>
        <span className="text-3xl font-bold pt-2">
          &#xb0;{tempType === "c" ? "C" : "F"}
        </span>
      </div>
      <div className="min-max mb-5 text-3xl text-center">
        <p>
          {renderTemp(data.main.temp_max, tempType)}&#xb0;{" "}
          <span className="text-gray-400 text-xl">
            {" "}
            {renderTemp(data.main.temp_min, tempType)}&#xb0;
          </span>
        </p>
      </div>
      <div className="line-divider border mt-8 mb-5"></div>
      <div className="more-info-about-today flex flex-col gap-4 mb-5">
        <div className="info-item flex items-center gap-3">
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

        <div className="info-item flex items-center gap-3">
          <div
            className="info-icon flex justify-center"
            style={{ width: "16%" }}
          >
            <WiHumidity className="text-blue-500 text-3xl" />
          </div>
          <div className="info-text font-medium text-black">
            <p>Humidity - {main.humidity}%</p>
          </div>
        </div>

        <div className="info-item flex items-center gap-3">
          <div
            className="info-icon flex justify-center"
            style={{ width: "16%" }}
          >
            <RiWindyFill className="text-sky-500 text-2xl" />
          </div>
          <div className="info-text font-medium text-black">
            <p>Wind Speed - {wind.speed} km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherForTodayMobile;
