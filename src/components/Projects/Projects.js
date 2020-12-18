import React from 'react';
import Project from '../../img/danube.jpg';

function Projects() {
  return (
    <>
      <section class="my-work" id="work">
        <h2 class="sectionTitle sectionTitleWork">My projects</h2>
        <p class="sectionSubtitle sectionSubtitleWork">
          A selection of my range of work
        </p>

        <div class="projects">
          <a
            href="https://vildanguenay.github.io/netflix-clone/"
            class="projectItem"
          >
            <img src={Project} alt="" class="projectImg" />
          </a>
          <div class="projectItem">description</div>
        </div>
      </section>
    </>
  );
}

export default Projects;
