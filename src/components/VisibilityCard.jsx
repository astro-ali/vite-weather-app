import React from "react";
import { FaRegCompass } from "react-icons/fa";

const VisibilityCard = ({ visibility }) => {
  return (
    <div className="bg-white text-black w-full shadow-md md:shadow-sm px-10 pr-0 md:pr-32 py-8 rounded-3xl flex flex-col gap-7">
      <h3 className="info-property text-xl font-normal text-gray-400">
        Visibility
      </h3>
      <div className="info-data text-5xl">
        {visibility / 1000}
        <span className="text-xl"> km/h</span>
      </div>
      <div className="additional-data flex items-center gap-2">
        <span>
          <FaRegCompass className="text-2xl text-blue-600" />
        </span>
        <span className="text-lg font-semibold">Fields Are Clear</span>
      </div>
    </div>
  );
};

export default VisibilityCard;
