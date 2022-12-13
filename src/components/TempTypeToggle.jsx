import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { TempTypeState } from "../atoms";

const TempTypeToggle = () => {
  const [tempType, setTempType] = useRecoilState(TempTypeState);
  return (
    <div className="toggle-temp font-medium text-lg flex items-center gap-4">
      <button
        onClick={() => setTempType("c")}
        style={{ width: 30, height: 30 }}
        className={`${
          tempType === "c" ? "text-white bg-blue-700" : "text-blue-700 bg-white"
        } rounded-full p-5 flex items-center justify-center`}
      >
        <span>&#xb0;C</span>
      </button>
      <button
        onClick={() => setTempType("f")}
        style={{ width: 30, height: 30 }}
        className={`${
          tempType === "f" ? "text-white bg-blue-700" : "text-blue-700 bg-white"
        } rounded-full p-5 flex items-center justify-center`}
      >
        <span>&#xb0;F</span>
      </button>
    </div>
  );
};

export default TempTypeToggle;
