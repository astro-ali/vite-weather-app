import React, { useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { MdOutlineMyLocation } from "react-icons/md";

const SidebarSearch = () => {
  useEffect(() => {
    if ("geolocation" in navigator) {
      console.log("Available");
    } else {
      console.log("Not Available");
    }
  }, []);

  const handleGetLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  };

  return (
    <div className="text-base flex items-center justify-between bg-weathergray-100 px-5 py-3 rounded-xl">
      <button className="mr-3">
        <FiSearch className="text-xl text-gray-600" />
      </button>
      <input
        className="focus-visible:outline-none bg-inherit placeholder:text-gray-500 font-normal"
        type="text"
        name="search"
        placeholder="Search For Cities..."
      />
      <button onClick={handleGetLocation}>
        <MdOutlineMyLocation className="text-xl text-blue-500" />
      </button>
    </div>
  );
};

export default SidebarSearch;
