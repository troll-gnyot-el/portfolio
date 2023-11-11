import React from 'react';
import './Menu.css'

function Menu(headerStyle) {
  return (
      <header id="header" className={"header " + headerStyle}>
          <div className="container header__container">
              <a href="#" className="logo">
                  <img className="logo__img" src="favicon-cv.png" alt="Logo"/>
              </a>
              <nav className="menu">
                  <ul className="menu__list">
                      <li className="menu__item">
                          <a className="menu__link" href="#headerPage">
                              Main
                          </a>
                      </li>
                      <li className="menu__item">
                          <a className="menu__link" href="#aboutMe">
                              About me
                          </a>
                      </li>
                      <li className="menu__item">
                          <a className="menu__link" href="#portfolio">
                              Portfolio
                          </a>
                      </li>
                      <li className="menu__item">
                          <a className="menu__link" href="#contacts">
                              Contacts
                          </a>
                      </li>
                  </ul>
              </nav>
          </div>
      </header>
  );
}

export default Menu;