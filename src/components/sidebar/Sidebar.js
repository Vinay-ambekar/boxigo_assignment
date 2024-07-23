import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      id: "0",
      path: "/",
      name: "MY MOVES",
      icon: "px-2 bi bi-truck",
    },
    {
      id: "1",
      path: "/myprofile",
      name: "MY PROFILE",
      icon: "px-2 bi bi-person-fill",
    },
    {
      id: "2",
      path: "/getquote",
      name: "GET QUOTE",
      icon: "px-2 bi bi-file-earmark-richtext-fill",
    },
    {
      id: "3",
      path: "/logout",
      name: "LOGOUT",
      icon: "px-2 bi bi-box-arrow-right",
    },
  ];
  return (
    <div className="sidebar">
      <div className="bar-icon">
        <i class="bi bi-list d-none d-lg-block" onClick={toggle}></i>
      </div>

      {menuItem.map((item, i) => (
        <NavLink
          to={item.path}
          key={i}
          className={({ isActive }) => (isActive ? "curent-sidnav" : "sidnav")}
        >
          <div className="link_text">
            <i className={item.icon}></i>
          </div>
          <p className={`link_text ${isOpen ? "d-none d-lg-block" : "d-none"}`}>
            {item.name}
          </p>
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
