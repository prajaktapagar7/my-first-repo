import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className="menu_style">
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "green" : "white",
          })}
          to="/"
        >
          About Us
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "green" : "white",
          })}
          to="/service"
        >
          Services
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "green" : "white",
          })}
          to="/user/default/user"
        >
          User
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "green" : "white",
          })}
          to="/search"
        >
          Search
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "green" : "white",
          })}
          to="/contact"
        >
          Contact Us
        </NavLink>
      </div>
    </>
  );
};
export default Menu;
