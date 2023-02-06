import React from "react";
import "./SideBarOptions.css";
const SideBarOptions = ({ Icon, title, number, isActive, onClick }) => {
  return (
    <div
      className={`sidebarOptions ${isActive && "sidebarOptions--active"}`}
      onClick={onClick}
    >
      {Icon}
      <h4 onClick={onClick}>{title}</h4>
      <p>{number}</p>
    </div>
  );
};

export default SideBarOptions;
