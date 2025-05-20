
import React from "react";
import ProjectCard from "./projectCard/ProjectCard";
import ThreeRockMountain from "../../assets/Three Rock Mountain.png";
import Esport2 from "../../assets/E-sport2.png";
import Panier from "../../assets/Panier.png";
import LABEAUTECHEZMOI from "../../assets/LABEAUTECHEZMOI.png";
import "./Projects.css";
import { useEffect } from "react";


const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="project-section">
      <div className="container">
        <h1 className="project-heading">
          My Recent <span className="purple">Works</span>
        </h1>
        <p className="project-description">
          Here are a few projects I've worked on recently.
        </p>
        <div className="projects-grid">
        <ProjectCard
            imgPath={LABEAUTECHEZMOI}
            isBlog={false}
            title="LA BEAUTE CHEZ MOI"
            description="site web dédié à la vente de prestations de beauté."
            ghLink="https://github.com/JonathanG-coder/la-beaute-chez-moi"
          />
          <ProjectCard
            imgPath={Panier}
            isBlog={false}
            title="La Maison Jungle"
            description="application web e-commerce développée avec React."
            ghLink="https://github.com/JonathanG-coder/La-maison-jungle/tree/dev"
          />
          <ProjectCard
            imgPath={ThreeRockMountain}
            isBlog={false}
            title="SnapFace"
            description="SnapFace est une application web de partage de photos."
            ghLink="https://github.com/JonathanG-coder/Snapface"
          />
          <ProjectCard
            imgPath={Esport2}
            isBlog={false}
            title="E-sport2"
            description="Présentation d'équipes de e-sports avec leurs joueurs, leur staff et le jeu auquel ils participent."
            ghLink="https://github.com/JonathanG-coder/E-sport"
          />
          
          

          {/* <ProjectCard
            imgPath={leaf}
            isBlog={false}
            title="Plant AI"
            description="Plant disease detection using CNN and Transfer Learning trained with PyTorch framework."
            ghLink="https://github.com/soumyajit4419/Plant_AI"
            demoLink="https://plant49-ai.herokuapp.com/"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
