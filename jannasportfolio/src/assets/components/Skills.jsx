import React from 'react';
import '../css/Skills.css';

const skills = [
  'JavaScript',
  'React',
  'Node.js',
  'CSS',
  'HTML',
  'Python',
  'Git',
  'Docker',
  'MongoDB',
];

const Skills = () => {
  return (
    <section className="skills-section">
        <h2>My Skills</h2>
        <div className="skills-container">
        {skills.map((skill, index) => (
            <span key={index} className="skill-item">
            {skill}
            </span>
        ))}
        </div>
    </section>
  );
};

export default Skills;