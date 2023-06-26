import React from "react";
import "./header.css";
import logo from "./Images/logo.png";

const Header = () => {
  return (
    <div className="headder">
      <header class="header">
        <img src={logo} alt="zohaib" class="logo" />

        <nav>
          <ul>
            <li>Hire Me</li>
            <li>Download CV</li>
            <li>About Me</li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
