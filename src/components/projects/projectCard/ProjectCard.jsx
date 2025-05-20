// src/components/ProjectCard/ProjectCard.jsx
import React from "react";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import "./ProjetCard.css";

const ProjectCard = ({ imgPath, title, description, ghLink, demoLink, isBlog }) => {
  return (
    <div className="project-card-view">
      <img src={imgPath} alt="card-img" className="project-card-img" />
      <div className="project-card-body">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{description}</p>
        <div className="project-card-buttons">
          <a href={ghLink} target="_blank" rel="noopener noreferrer" className="project-card-btn">
            <BsGithub /> &nbsp; {isBlog ? "Blog" : "GitHub"}
          </a>

          {!isBlog && demoLink && (
            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="project-card-btn demo-btn">
              <CgWebsite /> &nbsp; Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
