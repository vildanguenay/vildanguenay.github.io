import React from "react";
import classnames from "classnames";
// import Vildan from "./img/Vildan.jpg";

import styles from "./Header.module.scss";

function Header() {
  console.log(classnames(styles.sectionTitle, styles.navToggle));
  console.log(styles.navToggle);
  console.log(styles.sectionTitle);
  return (
    <>
      <div className="logo">
        <img src="" alt="" />
      </div>
      <button className="navToggle" aria-label="toggle navigation">
        <span className="hamburger"></span>
      </button>
      <nav className="nav">
        <ul className="navList">
          <li className="navItem">
            <a href="#home" className="navLink">
              Home
            </a>
          </li>
          <li className="navItem">
            <a href="#services" className="navLink">
              My Services
            </a>
          </li>
          <li className="navItem">
            <a href="#work" className="navLink">
              About me
            </a>
          </li>
          <li className="navItem">
            <a href="#footer" className="navLink">
              My Work
            </a>
          </li>
        </ul>
      </nav>

      {/* INTRO */}

      <section className="intro" id="home">
        <h1 className="sectionTitle sectionTitleIntro">
          Hi, I am <strong>Vildan Günay</strong>
        </h1>
        <p className="sectionSubtitle sectionSubtitleIntro">front-end dev</p>
        <img
          src="../img/Vildan.jpg"
          alt="a picture of Vildan smiling"
          className="introImage"
        />
      </section>
    </>
  );
}

export default Header;
