import React from "react";
import CurrentWeekForcast from "./CurrentWeekForcast";
import MainTodayInfo from "./MainTodayInfo";
import Navbar from "./Navbar";

const Main = () => {
  return (
    <div className="px-5 md:px-14 py-5 md:py-8 w-full">
      <Navbar />
      <main className="mt-8 md:mt-20">
        <CurrentWeekForcast />
        <MainTodayInfo />
      </main>
    </div>
  );
};

export default Main;
