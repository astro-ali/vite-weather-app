import React from "react";
import { isMobile } from "react-device-detect";
import PuffLoader from "react-spinners/PuffLoader";

const override = {
  display: "block",
};

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center mt-14 md:mt-32">
      <div className="loading-box flex flex-col items-center gap-20">
        <div className="text-to-display"></div>
        <PuffLoader
          color={"#1d4ed8"}
          loading={true}
          cssOverride={override}
          size={isMobile ? 100 : 180}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        <h1 className="text-lg md:text-2xl px-7 sm:px-0 text-blue-700 text-center">
          Loading Your Geo information, Just a Few Seconds...
        </h1>
      </div>
    </div>
  );
};

export default LoadingPage;
