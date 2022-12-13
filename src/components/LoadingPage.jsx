import React from "react";
import PuffLoader from "react-spinners/PuffLoader";

const override = {
  display: "block",
};

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center mt-32">
      <div className="loading-box flex flex-col items-center gap-20">
        <div className="text-to-display"></div>
        <PuffLoader
          color={"#1d4ed8"}
          loading={true}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        <h1 className="text-2xl text-blue-700">
          Loading Your Geo information, Just a Few Seconds...
        </h1>
      </div>
    </div>
  );
};

export default LoadingPage;
