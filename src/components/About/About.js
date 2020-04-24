import React from "react";
import Vildan from "D:/Portfolio/src/img/danube.jpg";

function About() {
  return (
    <section className="aboutMe" id="about">
      <h2 className="sectionTitle sectionTitleAbout">About Me</h2>
      <p className="sectionSubtitle sectionSubtitleAbout">
        dev based in Vienna, Austria
      </p>

      <div className="aboutMeBody">
        <p>
          Currently, I am exploring GraphQL and Apollo in more detail. Such
          amazing technologies enable developers to retrieve data efficiently
          and controlled.
        </p>
        <p>Feel free to reach out to me via the contact information below!</p>
      </div>

      <img src={Vildan} class="aboutMeImg" alt="Vildan"></img>
    </section>
  );
}
export default About;
