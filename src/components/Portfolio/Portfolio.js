import React from "react";
import "./Portfolio.css";
function Portfolio() {
    return (
        <div className="portfolio-body" id="portfolio">
            <h1>{"My portfolio"}</h1>
            <div className="projects-row">
                <div className="portfolio-item">
                    <a
                        href="https://spines.com"
                        target="_blank"
                    >
                        <div className="proj-container">
                            <img
                                src="spines_home.jpg"
                                alt="SPINES"
                            />
                            <div className="overlay">
                                <h3>SPINES.COM</h3>
                                <p>
                                    Harnessing the power of AI, Spines revolutionizes every facet
                                    of the publishing odyssey, from editing to cover design and distribution.
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="portfolio-item" style={{marginLeft: "10px"}}>
                    <a
                        href="https://alfabank.ru/en/"
                        target="_blank"
                    >
                        <div className="proj-container">
                            <img
                                src="alfa_home.jpg"
                                alt="ALFA-BANK"
                            />
                            <div className="overlay">
                                <h3>ALFA-BANK</h3>
                                <p>
                                    Alfa-Bank JSC is the largest of the private banks in Russia.
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="portfolio-item" style={{marginLeft: "10px"}}>
                    <a
                        href="https://troll-gnyot-el.github.io/nasa-proj/"
                        target="_blank"
                    >
                        <div className="proj-container">
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
        </div>
    );
}

export default Portfolio;
