import React from "react";
import { SiVscodium, SiPostman, SiSlack, SiVercel, SiMacos } from "react-icons/si";
import "./Toolstack.css";

export default function Toolstack() {
  const tools = [SiVscodium, SiPostman, SiVercel];

  return (
    <div className="tool-grid">
      {tools.map((Tool, index) => (
        <div key={index} className="tool-icon">
          <Tool />
        </div>
      ))}
    </div>
  );
}
