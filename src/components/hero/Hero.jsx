import React, { useState } from "react";
import "./hero.css";
import zohaibPicture from "../Images/zohaib's picture.png"
import { useTypewriter, Cursor } from "react-simple-typewriter";


const Hero = () => {
  const [paraExpand, setParaExpand] = useState(true);
  const [paraExpand1, setParaExpand1] = useState(true);
  const [paraExpand2, setParaExpand2] = useState(true);
  const [paraExpand3, setParaExpand3] = useState(true);
  const [paraExpand4, setParaExpand4] = useState(true);

  const handleParaExpand = () => {
    setParaExpand(!paraExpand);
  };
  
  const handleParaExpand1 = () => {
    setParaExpand1(!paraExpand1);
  };

  const handleParaExpand2 = () => {
    setParaExpand2(!paraExpand2);
  };

  const handleParaExpand3 = () => {
    setParaExpand3(!paraExpand3);
  };

  const handleParaExpand4 = () => {
    setParaExpand4(!paraExpand4);
  };

  const [text] = useTypewriter({
    words: [
      "ReactJS Developer.",
      "JS Developer.",
      "Web Developer.",
      "Frontend Web Developer."
    ],
    loop: {},
  });

  return (
    <div className="mainSection">
      <div className="mainSectionC">
        <h1 className="mainSectionHeading">MUHAMMAD ZOHAIB</h1>
        <h3 className="frontEDev">{text}<Cursor />
        </h3>
        <div className="paraSectionContainer">
          <p
            className="paraMainSection paraMainSection1"
            onClick={handleParaExpand}
            // onClick={!handleParaExpand}
          >
            {" "}
            {paraExpand
              ? "🎨 Frontend Maestro"
              : "Hi there! I'm a frontend developer with a passion for creating beautiful and functional websites. My goal is to make the user experience as seamless as possible while ensuring that the websiteis visually appealing."}
          </p>

          <p
            className="paraMainSection paraMainSection2"
            onClick={handleParaExpand1}
            // onMouseLeave={!handleParaExpand1}
          >
            {" "}
            {paraExpand1
              ? "Showcasing My Expertise 😍"
              : "I have extensive experience with HTML, CSS, JavaScript, and various frontend frameworks such as React and Vue. I also have experience working with APIs, responsive design, and cross-browser compatibility."}
          </p>

          <p
            className="paraMainSection paraMainSection3"
            onClick={handleParaExpand2}
            // onMouseLeave={!handleParaExpand2}
          >
            {paraExpand2
              ? "🎨 Masterpieces 🚀"
              : "In my portfolio, you will find a collection of projects that showcase my skills and expertise. From single-page applications to responsive e-commerce websites, each project has been carefully designed and coded to proide an optimal user experience"}
          </p>

          <p
            className="paraMainSection paraMainSection4"
            onClick={handleParaExpand3}
            // onMouseLeave={!handleParaExpand3}
          >
            {" "}
            {paraExpand3
              ? "🌟 🚀 Versatile Collaborator"
              : "I take pride in my ability to communicate effectively with clients and team members, ensuring that projects are completed on time and to the highest standards. I'm always on the lookout for new challenges and opportunities to further improve my skill "}
          </p>

          <p
            className="paraMainSection paraMainSection5"
            onClick={handleParaExpand4}
            // onMouseLeave={!handleParaExpand4}
          >
            {" "}
            {paraExpand4
              ? "🔥 🌟 Frontend Enthusiast"
              : "If you're looking for a frontend developer who is passionate, skilled, and dedicated to delivering high-quality work, look no further. Let's work together to create something amazing! "}
          </p>
        </div>
      </div>
      <div className="mainSectionImageBg">
        <img src={zohaibPicture} className="mainSectionImage" />
      </div>
    </div>
  );
};

export default Hero;
