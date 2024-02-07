import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import navProfile from "../../assets/nav-Profile.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" className="nav-logo" />
      <span className="cart-text">
        <p>ZCART</p>
        <h6>Admin Portal</h6>
      </span>
      <img src={navProfile} alt="" className="nav-profile" />
    </div>
  );
};

export default Navbar;
