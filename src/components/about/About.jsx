import React from "react";
import "./About.css";
import laptopImg from "../../assets/about.png";
import AboutCard from "./aboutCard/AboutCard";
import Techstack from "./techstack/Techstack";
import Toolstack from "./toolstack/Toolstack";
import Github from "./github/Github";

export default function About() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-top">
          <div className="about-text">
            <h1>
              Know Who <span className="purple">I'M</span>
            </h1>
            <AboutCard />
          </div>
          <div className="about-img">
            <img src={laptopImg} alt="about" />
          </div>
        </div>

        <h1 className="section-title">
          Professional <span className="purple">Skillset</span>
        </h1>
        <Techstack />

        <h1 className="section-title">
          <span className="purple">Tools</span> I use
        </h1>
        <Toolstack />

        <Github />
      </div>
    </section>
  );
}
