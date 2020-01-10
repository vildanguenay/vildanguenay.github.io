import React from "react";

function Header() {
  return (
    <>
      <div className="logo">
        <img src="img/devjane.png" alt="" />
      </div>
      <button className="navToggle" aria-label="toggle navigation">
        <span className="hamburger"></span>
      </button>
      <nav className="nav">
        <ul className="navList">
          <li className="navItem">
            <a href="#" className="navLink">
              Home
            </a>
          </li>
          <li className="navItem">
            <a href="#" className="navLink">
              My Services
            </a>
          </li>
          <li className="navItem">
            <a href="#" className="navLink">
              About me
            </a>
          </li>
          <li className="navItem">
            <a href="#" className="navLink">
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
        <img src="img/dev-jane-01.jpg" alt="a picture of Vildan smiling" />
      </section>
    </>
  );
}

export default Header;
