import React from "react";

const DayInWeeKCard = ({ index }) => {
  return (
    <div
      key={index}
      className="bg-white text-black w-fit text-center px-5 py-4 rounded-3xl shadow-sm"
    >
      <h5 className="font-medium text-blue-700 mb-3 md:mb-1">12:30</h5>
      <div className="weather-image flex items-center justify-center mb-3">
        <img
          src="/images/weather-conditions/cloudy.png"
          alt="Cloudy"
          height="100px"
          width="100px"
        />
      </div>
      <p>15 &#xb0; C</p>
    </div>
  );
};

export default DayInWeeKCard;
