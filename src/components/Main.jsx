import React from "react";
import CurrentWeekForcast from "./CurrentWeekForcast";
import MainTodayInfo from "./MainTodayInfo";
import Navbar from "./Navbar";

const Main = ({ data, forcast }) => {
  return (
    <div className="px-14 py-8 w-full">
      <Navbar />
      <main className="mt-20">
        <CurrentWeekForcast forcast={forcast} />
        <MainTodayInfo data={data} />
      </main>
    </div>
  );
};

export default Main;
