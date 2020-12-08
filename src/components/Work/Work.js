import React from 'react';
import reactSymbol from '../../img/react.svg';
import js from '../../img/js.svg';
import node from '../../img/node.svg';
import bootstrap from '../../img/bootstrap.svg';
import sassSymbol from '../../img/sass.svg';
import scrum from '../../img/scrum.svg';
import graphql from '../../img/graphql.svg';
import apollo from '../../img/apollo.svg';

function Work() {
  return (
    <section className="myWork" id="work">
      <h2 className="sectionTitle sectionTitleWork">Technologies</h2>
      <p className="sectionSubtitle sectionSubtitleWork">My selection</p>

      <div className="portfolio">
        <div className="portfolioItem">
          <img src={reactSymbol} alt="" className="portfolioImg"></img>
        </div>
        <div className="portfolioItem">
          <img src={js} alt="" className="portfolioImg"></img>
        </div>
        <div className="portfolioItem backgroundItem">
          <img src={node} alt="" className="portfolioImg"></img>
        </div>
        <div className="portfolioItem">
          <img src={graphql} alt="" className="portfolioImg"></img>
        </div>
        <div className="portfolioItem backgroundItem">
          <img src={apollo} alt="" className="portfolioImg"></img>
        </div>
        <div className="portfolioItem">
          <img src={bootstrap} alt="" className="portfolioImg"></img>
        </div>
        <div className="portfolioItem">
          <img src={sassSymbol} alt="" className="portfolioImg"></img>
        </div>
        <div className="portfolioItem">
          <img src={scrum} alt="" className="portfolioImg"></img>
        </div>
      </div>
    </section>
  );
}
export default Work;
