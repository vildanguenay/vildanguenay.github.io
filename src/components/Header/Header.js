import React from "react";
import Vildan from "D:/Portfolio/src/img/fajka.jpg";
// import pres from "D:/Portfolio/src/img/presenting.jpg";

function Header() {
  const handleHamburger = () => {
    document.body.classList.toggle("navOpen");
  };
  return (
    <>
      <header>
        <div class="upperHeader">
          <div class="logo">
            <img src="" alt="" />
          </div>
          <button
            class="navToggle"
            aria-label="toggle navigation"
            onClick={handleHamburger}
          >
            <span class="hamburger"></span>
          </button>
        </div>
        <nav class="nav">
          <ul class="navList">
            <li class="navItem">
              <a href="#home" class="navLink" onClick={handleHamburger}>
                Home
              </a>
            </li>
            <li class="navItem">
              <a href="#work" class="navLink" onClick={handleHamburger}>
                My Technologies
              </a>
            </li>
            <li class="navItem">
              <a href="#services" class="navLink" onClick={handleHamburger}>
                My Path
              </a>
            </li>
            <li class="navItem">
              <a href="#about" class="navLink" onClick={handleHamburger}>
                About me
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* INTRO */}

      <section class="intro" id="home">
        <h1 class="sectionTitle sectionTitleIntro">
          Welcome,
          <div className="stronger">
            I am <strong>Vildan</strong>!
          </div>
        </h1>
        <p class="sectionSubtitle sectionSubtitleIntro">WEBDEVELOPER</p>
        <img src={Vildan} alt="" class="introImg" />
      </section>
    </>
  );
}

export default Header;
