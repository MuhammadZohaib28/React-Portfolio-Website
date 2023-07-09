import React from "react";
import "./header.css";
import logo from "./Images/logo.png";
import cvFile from "./path/to/Muhammad Zohaib Resume.pdf";

const Header = (props) => {
  const handleHireMeClick = () => {
    window.open("mailto:zohaibsoomro0101@gmail.com", "_blank");
  };

  const handleDownloadCVClick = () => {
    window.open(cvFile, "_blank");
  };

  return (
    <div className="headder">
      <header class="header">
        <img src={logo} alt="zohaib" class="logo" />

        <nav>
          <ul>
            <li onClick={handleHireMeClick}>Hire Me</li>
            <li onClick={handleDownloadCVClick}>Download Resume</li>
            <li onClick={props.button}>
            {props.name === "light" ? "Convert to Dark Mode" : "Convert to Light Mode"}
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
