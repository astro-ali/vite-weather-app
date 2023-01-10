import React from "react";

const TabNavigator = () => {
  return (
    <div className="tabs-navigator">
      <ul className="flex gap-12 text-2xl font-medium text-gray-400">
        <li className="text-blue-700 border-b-2 border-solid border-blue-700 pb-3">
          <a href="#">Today</a>
        </li>
      </ul>
    </div>
  );
};

export default TabNavigator;
