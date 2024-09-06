import React from 'react';
import '../css/ProjectCard.css';

function ProjectCard ({project}) {
    return (
        <div className="project-card">
            <img src={project.image} alt={project.name} className="project-image" />
            <h3 className="project-title">{project.name}</h3>
            <p className='project-description'>{project.description}</p>
            <a href={project.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
    )
}

export default ProjectCard;