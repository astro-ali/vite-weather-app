import React from "react";

const TempTypeToggle = () => {
  return (
    <div className="toggle-temp font-medium text-lg flex items-center gap-4">
      <button
        style={{ width: 30, height: 30 }}
        className="text-white bg-blue-700 rounded-full p-5 flex items-center justify-center"
      >
        <span>&#xb0;C</span>
      </button>
      <button
        style={{ width: 30, height: 30 }}
        className="text-blue-700 bg-whitea rounded-full p-5 flex items-center justify-center"
      >
        <span>&#xb0;F</span>
      </button>
    </div>
  );
};

export default TempTypeToggle;
