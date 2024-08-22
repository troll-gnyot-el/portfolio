import React from "react";
import "./AboutMe.css";
function AboutMe() {
  const QUOTE = "Your bugs are my problem.";

  return (
    <div className="page-body" id="aboutMe">
      <h1>{QUOTE}</h1>
      <p>
        I am into web-development 6 years, of which React development is 3
        years. I participated in the development of internal systems for Gazprom and
        three large Rusian banks (Alfa-bank, Rosbank, SMP bank).
      </p>
      <span>
        <a href="CV-short.pdf"></a>
      </span>
    </div>
  );
}

export default AboutMe;
