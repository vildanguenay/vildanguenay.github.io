import React from "react";

function MyServices() {
  return (
    <section className="myServices" id="services">
      <h2 className="sectionTitle sectionTitleServices">
        My Path to Webdevelopment
      </h2>
      <div className="services">
        <div className="service">
          <h3>STEP 1: Code Factory Vienna</h3>
          <p>
            The Full Stack Web Developer training course prepared me for a
            career as Junior Web Developer. From back-end to front-end
            programming languages and frameworks I gained first-hand experience
            of the most popular programs listed below - you can view them by
            clicking the "My selection of technologies" button. It was a very
            enriching but also tough experience. After 15 weeks I immediately
            started my developer position at xxxldigital.
          </p>
        </div>
        <div className="service">
          <h3>STEP 2: Webdeveloper @xxxldigital</h3>
          <p>
            After successfully completing the "Fullstack Web Development"
            education at Code Factory Vienna I started to work at the world's
            second largest furniture retailer xxxldigital, the IT department of
            XXXLutz.
          </p>
        </div>
      </div>

      <a href="#work" className="btn">
        My selection of technologies
      </a>
    </section>
  );
}

export default MyServices;
