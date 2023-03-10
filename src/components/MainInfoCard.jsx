import React from "react";
import { FaRegCompass } from "react-icons/fa";

const MainInfoCard = () => {
  return (
    <div className="bg-white text-black w-full shadow-sm px-10 pr-32 py-8 rounded-3xl flex flex-col gap-7">
      <h3 className="info-property text-xl font-normal text-gray-400">
        Wind Status
      </h3>
      <div className="info-data text-5xl">
        7.70<span className="text-xl">km/h</span>
      </div>
      <div className="additional-data flex items-center gap-2">
        <span>
          <FaRegCompass className="text-2xl text-blue-600" />
        </span>
        <span className="text-lg font-semibold">WSW</span>
      </div>
    </div>
  );
};

export default MainInfoCard;
