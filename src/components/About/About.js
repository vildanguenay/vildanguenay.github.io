import React from "react";
import Vildan from "D:/Portfolio/src/img/Vildan.jpg";

function About() {
  return (
    <section className="aboutMe" id="about">
      <h2 className="sectionTitle sectionTitleAbout">Who I am</h2>
      <p className="sectionSubtitle sectionSubtitleAbout">
        dev based in Vienna
      </p>

      <div className="aboutMeBody">
        <p>bksbfuiebruiberuirbgvieurbu</p>
        <p>earegrefgrefgergregrerreqeqrfqwe</p>
      </div>

      <img src={Vildan} class="aboutMeImg" alt="Vildan"></img>
    </section>
  );
}
export default About;
