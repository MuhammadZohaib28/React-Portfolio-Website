import React from "react";
import "./footer.css";
import logo from "../components/Images/logo.png";
import fbLogo from "../components/Images/facebook.png";
import githubLogo from "../components/Images/github.png";
import linkedInLogo from "../components/Images/linkedIn.png";
import twitterLogo from "../components/Images/twitter.png";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer>
      <div className="nameContainerFooter">
        <span className="yearFooter">{year}</span>
        <h2 className="nameFooter">MUHAMMADZOHAIB</h2>
      </div>

      <div className="logoContainerFooter">
        <img src={logo} alt="" className="logoFooter" />
      </div>

      <div className="socialMediaIconContainerFooter">
        <ul className="socialMediaIconsFooter">
          <a
            href="https://www.facebook.com/dashinggzohaib.soomro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="socialMediaIconFooter">
              <img src={fbLogo} alt="" href="" />
            </li>
          </a>

          <a href="https://github.com/MuhammadZohaib28" target="_blank" rel="noopener noreferrer">
            <li className="socialMediaIconFooter">
              <img src={githubLogo} alt="" />
            </li>
          </a>

          <a href="https://www.linkedin.com/in/muhammad-zohaib-b94280190/" target="_blank" rel="noopener noreferrer">
            <li className="socialMediaIconFooter">
              <img src={linkedInLogo} alt="" className="linkedIn"/>
            </li>
          </a>

          <a href="http://" target="_blank" rel="noopener noreferrer">
            <li className="socialMediaIconFooter">
              <img src={twitterLogo} alt="" />
            </li>
          </a>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
