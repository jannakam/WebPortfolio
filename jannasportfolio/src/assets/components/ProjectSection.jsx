import React from 'react';
import ProjectCard from './ProjectCard'
import '../css/ProjectsSection.css';

function ProjectsSection({ projects }) {
  return (
    <section className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;