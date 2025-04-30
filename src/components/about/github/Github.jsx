import React from "react";
import GitHubCalendar from "react-github-calendar";
import "./Github.css";

export default function Github() {
  return (
    <div className="github-section">
      <h2 className="github-title">
        Days I <span className="purple">Code</span>
      </h2>
      <div className="github-calendar">
        <GitHubCalendar
          username="JonathanG-coder"
          blockSize={15}
          blockMargin={5}
          color="#c084f5"
          fontSize={16}
        />
      </div>
    </div>
  );
}
