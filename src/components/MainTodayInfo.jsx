import React from "react";
import HumidityCard from "./HumidityCard";
import WindCard from "./WindCard";
import VisibilityCard from "./VisibilityCard";

const MainTodayInfo = ({ data }) => {
  const { main } = data;
  const weather = data.weather[0];
  return (
    <div className="mt-6">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-gray-800">
          Today's Highlights
        </h1>
      </div>
      <div className="info-cards grid grid-cols-3 gap-10">
        <HumidityCard humidity={main.humidity} name={weather.description} />
        <WindCard speed={data.wind.speed} />
        <VisibilityCard visibility={data.visibility} />
      </div>
    </div>
  );
};

export default MainTodayInfo;
