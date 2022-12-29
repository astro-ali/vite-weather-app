import React from "react";
import Avatar from "./Avatar";
import TempTypeToggle from "./TempTypeToggle";

const AccountAvatar = () => {
  return (
    <div className="account-avator-side flex items-center gap-10">
      <TempTypeToggle />
      <Avatar />
    </div>
  );
};

export default AccountAvatar;
