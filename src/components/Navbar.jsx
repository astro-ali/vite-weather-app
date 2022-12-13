import React, { useState } from "react";
import AccountAvatar from "./AccountAvatar";
import TabNavigator from "./TabNavigator";

const Navbar = () => {
  return (
    <div className="navbar flex items-center justify-between w-full">
      <TabNavigator />
      <AccountAvatar />
    </div>
  );
};

export default Navbar;
