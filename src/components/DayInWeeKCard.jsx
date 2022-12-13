import moment from "moment";
import React from "react";
import { useRecoilState } from "recoil";
import { TempTypeState } from "../atoms";

const weatherconditionsMap = {
  Thunderstorm: "storms",
  Drizzle: "few-rains",
  Rain: "rainy",
  Snow: "rain-snow",
  Clear: "sunny",
  Clouds: "cloudy",
};

const DayInWeeKCard = ({ index, data }) => {
  const [tempType, setTempType] = useRecoilState(TempTypeState);
  const { main } = data;

  const weather = data.weather[0];

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
    return moment(date).format("ddd");
  };

  return (
    <div
      key={index}
      className="bg-white text-black w-fit text-center px-5 py-4 rounded-3xl shadow-sm"
    >
      <h5 className="font-medium text-blue-700">{getDay(data.dt)}</h5>
      <div className="weather-image flex items-center justify-center mb-3">
        <img
          src={`/images/weather-conditions/${
            weatherconditionsMap[weather.main]
          }.png`}
          alt="Cloudy"
          height="100px"
          width="100px"
        />
      </div>
      <p>{renderTemp(main.feels_like, tempType)}&#xb0; </p>
    </div>
  );
};

export default DayInWeeKCard;
