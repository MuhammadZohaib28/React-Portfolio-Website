import React, { useState } from "react";
import "./header.css";
import logo from "../Images/logo.png";
import cvFile from "../path/to/Muhammad Zohaib Resume.pdf";
import bars from "../Images/barsss.png";
import x from "../Images/close.png";
import ThemeMode from "../thememode/ThemeMode";

const Header = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleHireMeClick = () => {
    window.open("mailto:zohaibsoomro0101@gmail.com", "_blank");
  };

  const handleDownloadCVClick = () => {
    window.open(cvFile, "_blank");
  };

  const handleMenuButtonClick = () => {
    setShowMenu(!showMenu);
  };

  const showBars = () => {
    return (
      <img src={bars} style={{ height: "3rem", mixBlendMode: "multiply" }} />
    );
  };

  const showClose = () => {
    return <img src={x} style={{ height: "3rem" }} />;
  };

  return (
    <div className="headder">
      <header class="header">
        <img src={logo} alt="zohaib" class="logo" />

        <nav>
          {window.innerWidth <= 768 && (
            <button className="menuButton" onClick={handleMenuButtonClick}>
              {showMenu ? showClose() : showBars()}
            </button>
          )}
          {(window.innerWidth > 768 || showMenu) && (
            <ul className={`headerNavUl ${showMenu ? "showMenu" : ""}`}>
              <li className="headerNavLi" onClick={handleHireMeClick}>
                Hire Me
              </li>
              <li className="headerNavLi" onClick={handleDownloadCVClick}>
                Download Resume
              </li>
              <li onClick={props.button}>
                <ThemeMode />
              </li>
            </ul>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Header;
