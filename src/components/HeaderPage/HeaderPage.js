import React from "react";
import "./Header.css";
import Menu from "../Menu/Menu";
// rfc Tab
function Header() {
  const TITLE = "Kasvina Evgeniia";
  const TITLE_TEXT = "Web-developer";
  const QUOTE = "Your bugs is my problem";

  return (
    <div className="header">
      <Menu/>
      <div>
        <p className="title animated-text-down">{TITLE}</p>
        <p className="title-text animated-text-up">{TITLE_TEXT}</p>
      </div>

        <img src="me.jpg" alt="Evgeniia Kasvina" />
    </div>
  );
}

export default Header;
