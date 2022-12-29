import React from "react";
import "./App.css";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <div className="flex bg-weathergray-100">
        <div className="bg-white shadow-sm" style={{ width: "440px" }}>
          <Sidebar />
        </div>
        <div className="w-full">
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
