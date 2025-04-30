import React from "react";
import { ImPointRight } from "react-icons/im";
import "./AboutCard.css";

export default function AboutCard() {
  return (
    <div className="about-card">
      <p>
        Hi Everyone, I am <span className="purple">GAGER Jonathan</span> from{" "}
        <span className="purple">Espelette, France</span>.
        <br />
        I am currently a software developer passionate about web technologies.
        <br />
        <br />
        Besides coding, here are some things I love doing:
      </p>
      <ul>
        <li><ImPointRight /> spearfishing</li>
        <li><ImPointRight /> hiking</li>
        <li><ImPointRight /> travel</li>
      </ul>
      <p className="quote">"Strive to build things that make a difference!"</p>
      <footer>—</footer>
    </div>
  );
}
