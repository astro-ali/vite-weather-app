import React from "react";
import DayInWeeKCard from "./DayInWeeKCard";

const CurrentWeekForcast = ({ forcast }) => {
  const { list } = forcast;

  return (
    <>
      <div className="mb-8 mt-12 md:mt-0">
        <h1 className="text-xl px-4 md:px-0 md:text-3xl font-semibold text-gray-800">
          Weather Forcast
        </h1>
      </div>
      <div className="flex flex-wrap md:flex-nowrap gap-7 justify-around mb-8 md:mb-20">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((item) => {
          return <DayInWeeKCard key={item} index={item} data={list[item]} />;
        })}
      </div>
    </>
  );
};

export default CurrentWeekForcast;
