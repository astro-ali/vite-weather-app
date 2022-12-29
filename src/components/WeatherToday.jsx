import React from "react";

const WeatherToday = () => {
  return (
    <div className="flex flex-col items-center border-b-2 pb-14 mb-14">
      <div className="city-name self-start mb-2 text-xl font-semibold">
        <h2>Baghdad, IQ</h2>
      </div>
      <div className="weather-status-image flex justify-center">
        <img
          src="/images/weather-conditions/cloudy.png"
          alt="Sunny"
          width="220px"
          height="220px"
        />
      </div>
      <div className="today-weather-temp mb-3 mt-5 flex">
        <h2 className="text-9xl font-normal">19</h2>
        <span className="text-3xl font-bold pt-2">&#xb0;C</span>
      </div>
      <div className="min-max mb-5 text-3xl">
        <p>
          23&#xb0;
          <span className="text-gray-400 text-xl"> 10&#xb0;</span>
        </p>
      </div>
      <div className="today-info text-2xl font-medium">
        <h4>
          Thursday,<span className="text-gray-600 text-lg"> 8:15 PM</span>
        </h4>
      </div>
    </div>
  );
};

export default WeatherToday;
