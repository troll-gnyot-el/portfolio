import React from "react";
import "./Portfolio.css";
function Portfolio() {
  return (
    <div className="portfolio-body" id="portfolio">
      <h1>{"My portfolio"}</h1>
      <div className="portfolio-item">
        <a
          href="https://troll-gnyot-el.github.io/nasa-proj/"
          target="_blank"
        >
          <div className="image-container">
            <img
              src="https://blogs.nasa.gov/spacestation/wp-content/uploads/sites/240/2022/10/blog_iss066e175249.jpg"
              alt="NASA FUN PROJECT"
            />
            <div className="overlay">
              <h3>NASA FUN PROJECT</h3>
              <p>
                NASA FUN PROJECT is advertising project providing access to
                space news and a catalog of space-themed hoodies.
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
