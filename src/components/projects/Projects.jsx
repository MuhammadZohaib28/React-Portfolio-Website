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
        {projectData.map((items, index) => {
          return (
            <>
              <div className="postContainer">
                <div className="postWrapper"></div>
                <div className="postTop">
                  <div className="postTopLeft">
                    <img
                      src={items.accountPicture}
                      alt=""
                      className="postTopLeftImg"
                    />
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
                    <a href={items.projectLink} target="_blank">
                      {index === 0 && items.projectVideo ? (
                        <video controls src={items.projectVideo} className="postBottomImg"/>
                         
                      ) : (
                        <img
                          src={items.projectPicture}
                          alt=""
                          className="postBottomImg"
                        />
                      )}
                    </a>
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
