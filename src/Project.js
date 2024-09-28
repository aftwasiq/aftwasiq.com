import React from 'react';
import './Project.css';

// Import skill icons
import pythonIcon from './assets/python.jpg';
import javascriptIcon from './assets/javascript.jpg';
import reactIcon from './assets/react.jpg';
import machineLearningIcon from './assets/pytorch.jpg';
import cppIcon from './assets/c++.jpg';

const skillIcons = {
    python: pythonIcon,
    javascript: javascriptIcon,
    react: reactIcon,
    'machine-learning': machineLearningIcon,
    c: cppIcon,
};

const Project = ({ title, description, skills, githubLink }) => {
    return (
        <div className="project">
            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>
            <div className="skills">
                {skills.map((skill, index) => (
                    <span key={index} className="skill-icon">
                        <img src={skillIcons[skill.toLowerCase()]} alt={skill} className="skill-image" />
                    </span>
                ))}
            </div>
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="github-button">
                View on GitHub
            </a>
        </div>
    );
};

export default Project;

