import React from "react";
import "./HeaderPage.css";
// rfc Tab
function HeaderPage() {
  const TITLE = "Kasvin Evgeniia";
  const TITLE_TEXT = "Web-developer";

  return (
    <div className="header-page" id='headerPage'>
      <div style={{minWidth: '600px'}}>
        <p className="title animated-text-down">{TITLE}</p>
        <p className="title-text animated-text-up">{TITLE_TEXT}</p>
      </div>
      <div className="image-container">
        <img src="/me.jpg" alt="Kasvin Evgeniia" className="rounded-image" />
      </div>
    </div>
  );
}

export default HeaderPage;
