import "./App.css";
import HeaderPage from "./components/HeaderPage/HeaderPage";
import AboutMe from "./components/AboutMe/AboutMe";
import "typeface-roboto";
import { useEffect, useState } from "react";
import Menu from "./components/Menu/Menu";
function App() {
  const [headerStyle, setHeaderStyle] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", function () {
      const scrollPos = window.scrollY;

      if (scrollPos > 100) {
        setHeaderStyle("header_mini");
      } else {
        setHeaderStyle("");
      }
    });
  }, []);

  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <Menu headerStyle={headerStyle} />
        <HeaderPage />
      </div>
      <AboutMe />
    </div>
  );
}

export default App;
