import React, { useState } from "react";

const TabNavigator = () => {
  const [activeTab, setActiveTab] = useState("today");
  return (
    <div className="tabs-navigator">
      <ul className="flex gap-12 text-2xl font-medium text-gray-400">
        <li
          className={
            activeTab === "today"
              ? "text-blue-700 border-b-2 border-solid border-blue-700 pb-3"
              : ""
          }
          onClick={() => setActiveTab("today")}
        >
          <a href="#">Today</a>
        </li>
      </ul>
    </div>
  );
};

export default TabNavigator;
