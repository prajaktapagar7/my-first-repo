import React from "react";
import logo from "./Images/logo.png";
const Header = () => {
  return (
    <>
      <div className="header">
        <img src={logo} alt="logo" height="100" width="150" />
        <h1>Keep App</h1>
      </div>
    </>
  );
};
export default Header;
