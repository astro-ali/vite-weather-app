import React from "react";
import moment from "moment";
import { useRecoilState } from "recoil";
import { tempState } from "../atoms";

const weatherconditionsMap = {
  Thunderstorm: "storms",
  Drizzle: "few-rains",
  Rain: "rainy",
  Snow: "rain-snow",
  Clear: "sunny",
  Clouds: "cloudy",
};

const WeatherToday = ({ data }) => {
  const [tempType, setTempType] = useRecoilState(tempState);
  const renderDay = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return moment(date).format("dddd");
  };

  const renderTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return moment(date).format("LT");
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

  return (
    <div className="flex flex-col items-center border-b-2 pb-14 mb-14">
      <div className="city-name self-start mb-2 text-xl font-semibold">
        <h2>{`${data.name}, ${data.sys.country}`}</h2>
      </div>
      <div className="weather-status-image flex justify-center">
        <img
          src={`/images/weather-conditions/${
            weatherconditionsMap[data.weather[0].main]
          }.png`}
          alt="Sunny"
          width="220px"
          height="220px"
        />
      </div>
      <div className="today-weather-temp mb-3 mt-5 flex">
        <h2 className="text-9xl font-normal">
          {renderTemp(data.main.temp, tempType)}
        </h2>
        <span className="text-3xl font-bold pt-2">
          &#xb0;{tempType.toUpperCase()}
        </span>
      </div>
      <div className="min-max mb-5 text-3xl">
        <p>
          {renderTemp(data.main.temp, tempType)}&#xb0;
          <span className="text-gray-400 text-xl">
            {" "}
            {renderTemp(data.main.temp, tempType)}&#xb0;
          </span>
        </p>
      </div>
      <div className="today-info text-2xl font-medium">
        <h4>
          {renderDay(data.dt)},
          <span className="text-gray-600 text-lg"> {renderTime(data.dt)}</span>
        </h4>
      </div>
    </div>
  );
};

export default WeatherToday;
