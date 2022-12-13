import React from "react";
import DayInWeeKCard from "./DayInWeeKCard";

const CurrentWeekForcast = ({ forcast }) => {
  const { list } = forcast;

  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-gray-800">
          The Weather for next 8 Hours
        </h1>
      </div>
      <div className="flex gap-7 justify-around mb-20">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((item) => {
          return <DayInWeeKCard key={item} index={item} data={list[item]} />;
        })}
      </div>
    </>
  );
};

export default CurrentWeekForcast;
