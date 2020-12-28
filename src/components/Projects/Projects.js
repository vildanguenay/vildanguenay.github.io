import React from 'react';
import { useState, useEffect, useRef, createContext } from 'react';

import Close from '../../img/closeCard.png';
import Netflix from '../../img/netflix.png';

import data from '../../projectsDescriptions.json';

const FeatureContext = createContext();

function Projects() {
  const node = useRef();

  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState();

  useEffect(() => {
    const handleClick = (click) => {
      if (node.current.contains(click.target)) {
        // inside click
        setShowFeature(true);
      } else {
        setShowFeature(false);
      }
      // outside click
    };

    const escapeListener = (e) => {
      if (e.key === 'Escape') {
        setShowFeature(false);
      }
    };
    // Attach the listeners on component mount.
    document.addEventListener('click', handleClick);
    document.addEventListener('keyup', escapeListener);
    // Detach the listeners on component unmount.
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keyup', escapeListener);
    };
  }, [itemFeature?.id, showFeature]);

  const ShowFeatureOnClick = () => {
    return showFeature ? (
      <>
        <div className="cardFeature">
          {/* <h3 className="featTitle">{itemFeature.title}</h3> */}
          <div className="content">
            <div>
              <h3 className="projectHeader">{itemFeature.header}</h3>
              <ul
                className="featureText"
                dangerouslySetInnerHTML={{ __html: itemFeature.description }}
              />
            </div>
            <div>
              <h3 className="projectHeader">applied technologies</h3>
              <ul
                className="featureText"
                dangerouslySetInnerHTML={{ __html: itemFeature.description2 }}
              />
            </div>
            <div className="featureClose" onClick={() => setShowFeature(false)}>
              <img className="closeImg" src={Close} alt="Close" />
            </div>
          </div>

          <a
            className="btn"
            href="https://vildanguenay.github.io/netflix-clone/"
          >
            open website
          </a>
          <div>
            <div className="playerLink"></div>
          </div>
        </div>
      </>
    ) : null;
  };

  return (
    <FeatureContext.Provider
      value={{
        itemFeature,
        setItemFeature,
        showFeature,
        setShowFeature,
      }}
    >
      <section className="myProjects" id="projects">
        <h2 className="sectionTitle sectionTitleProjects">My Projects</h2>
        <p className="sectionSubtitle sectionSubtitleProjects">
          Click on thumbnail for additional info and link
        </p>

        <div className="cardGroup" ref={node}>
          {data.map((item, index) => (
            <div
              className="cardItem"
              onClick={() => {
                setItemFeature(data[index]);
              }}
              key={item.id}
            >
              <h3 className="cardSubtitle">{item.title}</h3>
              <div className="cardImage">
                <img src={Netflix} id={item.id} alt="" className="projectImg" />
              </div>
            </div>
          ))}
        </div>

        {ShowFeatureOnClick()}
      </section>
    </FeatureContext.Provider>
  );
}

export default Projects;
