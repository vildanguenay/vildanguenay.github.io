import React from "react";
// import classnames from "classnames";
import Vildan from "D:/Portfolio/src/img/Vildan.jpg";

import styles from "./Header.module.scss";

function Header() {
  return (
    <>
      <header>
        <div class="logo">
          <img src="" alt="" />
        </div>
        <button class="navToggle" aria-label="toggle navigation">
          <span class="hamburger"></span>
        </button>
        <nav class="nav">
          <ul class="navList">
            <li class="navItem">
              <a href="#home" class="navLink">
                Home
              </a>
            </li>
            <li class="navItem">
              <a href="#services" class="navLink">
                My Services
              </a>
            </li>
            <li class="navItem">
              <a href="#work" class="navLink">
                About me
              </a>
            </li>
            <li class="navItem">
              <a href="#footer" class="navLink">
                My Work
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* INTRO */}

      <section class="intro" id="home">
        <h1 class="sectionTitle sectionTitleIntro">
          Hi, I am <strong>Vildan Günay</strong>
        </h1>
        <p class="sectionSubtitle sectionSubtitleIntro">front-end dev</p>
        <img
          src="../img/Vildan.jpg"
          alt="a picture of Vildan smiling"
          class="introImage"
        />
      </section>
    </>
  );
}

export default Header;
