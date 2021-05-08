import React from 'react';
import resumeData from '../../utils/resumeData';
import ProjectCard from '../ProjectCard/ProjectCard';
import './Projects.css';

const Projects = () => {
  return (
    <div id="projects" className="projects__container">
      <h1>Projects</h1>
      <section className="projects__cards">
        { resumeData.projects.map((project, index) => 
          (
            <ProjectCard key={ index } projectData={ project } />
          )
        )}
      </section>
    </div>
  )
}

export default Projects;
