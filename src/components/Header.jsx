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
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
