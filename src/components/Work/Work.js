import React from "react";
import reactSymbol from "D:/Portfolio/src/img/react.svg";
import js from "D:/Portfolio/src/img/js.svg";
import node from "D:/Portfolio/src/img/node.svg";
import bootstrap from "D:/Portfolio/src/img/bootstrap.svg";
import sassSymbol from "D:/Portfolio/src/img/sass.svg";
import scrum from "D:/Portfolio/src/img/scrum.svg";
import php from "D:/Portfolio/src/img/php.svg";
import graphql from "D:/Portfolio/src/img/graphql.svg";
import apollo from "D:/Portfolio/src/img/apollo.svg";

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
          <img src={php} alt="" className="portfolioImg"></img>
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
