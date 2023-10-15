import React from "react";
import "./ProjectCard.css";

function ProjectCard({ title, image, link, description }) {
  return (
    <div className="proCard ">
      <div className="proImg-container">
        <img src={image} alt="proImg" className="projectimage" />
      </div>
      <h3>{title}</h3>
      <p className="description">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="btn2 introbtn"
      >
        Click to View
      </a>
    </div>
  );
}

export default ProjectCard;
