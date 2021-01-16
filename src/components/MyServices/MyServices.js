import React from 'react';

function MyServices() {
  return (
    <section className="myServices" id="services">
      <h2 className="sectionTitle sectionTitleServices">
        My Path to Web Development
      </h2>
      <div className="services">
        <div className="service">
          <h3 className="servicesHeading">STEP 1: Education in Vienna</h3>
          <p className="servicesP">
            {/* <strong> */}
            From back-end to front-end programming languages and frameworks I
            gained first-hand experience of the most popular programs - you can
            view them by clicking the button below.
            {/* </strong> */}
          </p>
        </div>
        <div className="service">
          <h3 className="servicesHeading">
            STEP 2: Frontend developer @xxxldigital
          </h3>
          <p>
            {/* <strong> */}
            After successfully completing the "Fullstack Web Development"
            education I started to work at the world's second largest furniture
            retailer xxxldigital, the IT department of XXXLutz.
            {/* </strong> */}
          </p>
        </div>
      </div>

      <a href="#work" className="btn">
        My technologies-selection
      </a>
    </section>
  );
}

export default MyServices;
