import "./App.css";
import HeaderPage from "./components/HeaderPage/HeaderPage";
import AboutMe from "./components/AboutMe/AboutMe";
import "typeface-roboto";
import { useEffect, useState } from "react";
import Menu from "./components/Menu/Menu";
import Portfolio from "./components/Portfolio/Portfolio";
import Contacts from "./components/Contacts/Contacts";
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
      <Menu headerStyle={headerStyle} />
      <HeaderPage />
      <AboutMe />
      <Portfolio />
      <Contacts />
    </div>
  );
}

export default App;
