import React from "react";
import "./project.css";
// import zohaib from "./Images/zohaib's picture.png";
// import projectPicture from "./Images/333720800_943284120013635_9211563476470379960_n.jpg";
import projectData from "./ProjectsData";

const Projects = () => {
  return (
    <>
      <div className="aboutMeSection">
        <div className="socialMediaSectionHeadingContainer abt">
          <h1 className=" ">Projects</h1>
        </div>
        {projectData.map((items) => {
          return (
            <>
              <div className="postContainer">
                <div className="postWrapper"></div>
                <div className="postTop">
                  <div className="postTopLeft">
                    <img src={items.accountPicture} alt="" className="postTopLeftImg" />
                    <span className="postTopLeftName">Muhammad Zohaib</span>
                    <span className="postTopLeftDate">{items.date}</span>
                  </div>
                </div>
                <div className="postCenter">
                  <div className="postDiscriptionSection">
                    <p className="postDiscription">{items.description}</p>
                  </div>
                </div>
                <div className="postBottom">
                  <div className="postBottomImgContainer">
                    <img
                      src={items.projectPicture}
                      alt=""
                      className="postBottomImg"
                    />
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Projects;
