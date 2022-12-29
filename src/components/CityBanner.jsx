import React from "react";

const CityBanner = () => {
  return (
    <div
      className="mt-10 text-white flex h-48 items-center justify-center bg-no-repeat bg-cover bg-center rounded-2xl opacity-90"
      style={{
        backgroundImage: "url('/images/toronto-city.jpg')",
      }}
    >
      <p className="text-xl font-medium">Baghdad, IQ</p>
    </div>
  );
};

export default CityBanner;
