import React from "react";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import {
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import "./Techstack.css";

export default function Techstack() {
  const icons = [
    DiJavascript1,
    DiNodejs,
    DiReact,
    DiMongodb,
    DiGit,
    SiPostgresql,
  ];

  return (
    <div className="tech-grid">
      {icons.map((Icon, index) => (
        <div key={index} className="tech-icon">
          <Icon />
        </div>
      ))}
    </div>
  );
}
