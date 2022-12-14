import React from "react";
import { isMobile } from "react-device-detect";
import CurrentWeekForcast from "./CurrentWeekForcast";
import MainTodayInfo from "./MainTodayInfo";
import Navbar from "./Navbar";
import WeatherForTodayMobile from "./WeatherForTodayMobile";

const Main = ({ data, forcast }) => {
  return (
    <div className="px-5 md:px-14 py-5 md:py-8 w-full">
      <Navbar />
      <main className="mt-8 md:mt-20">
        {isMobile && <WeatherForTodayMobile data={data} />}
        {isMobile ? (
          <>
            <MainTodayInfo data={data} />
            <CurrentWeekForcast forcast={forcast} />
          </>
        ) : (
          <>
            <CurrentWeekForcast forcast={forcast} />
            <MainTodayInfo data={data} />
          </>
        )}
      </main>
    </div>
  );
};

export default Main;
