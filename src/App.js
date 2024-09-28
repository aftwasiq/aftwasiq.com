import React from 'react';
import './App.css';
import Project from './Project';
import linkedinIcon from './assets/linkedin.png';
import githubIcon from './assets/github.png';
import gmailIcon from './assets/gmail.png';

function App() {
    const projects = [
        {
            title: "Astronomer",
            description: "Developed a Discord bot using discord.py to provide real-time astronomical data such as NASA’s photo of the day, information about celestial objects, and upcoming asteroid events.\n" +
                "Integrated APIs from NASA, MediaWiki, and various news sources, combined with web scraping. Deployed across 15+ servers, reaching over 2,000 users.\n",
            skills: ["python"],
            githubLink: "https://github.com/aftwasiq/astronomer"
        },
        {
            title: "PredicTurf - HawkHacks 2024 Submission",
            description: "Developed a decentralized betting platform on the NEAR blockchain in a team of four, integrating machine learning models for accurate forecasting and analytics.\n" +
                "Built the frontend using React.js and developed a Flask-based backend for ML model hosting, trained with sci-kit on historical datasets.\n",
            skills: ["python", "javascript", "react", "machine-learning"],
            githubLink: "https://github.com/aftwasiq/hawkhacks24"
        },
        {
            title: "Galaxy Morphology Classification",
            description: "Created a machine learning model using PyTorch to classify galaxy images into spiral, elliptical, and irregular types.\n" +
                "Applied convolutional neural networks (CNNs) and transfer learning techniques to process labeled astronomical datasets from space surveys.\n",
            skills: ["python", "machine-learning"],
            githubLink: "https://github.com/aftwasiq/Galaxy-Morphology-Classification"
        },
        {
            title: "Multithreaded Physics Engine",
            description: "Currently working on a Multithreaded 2D Physics Engine written in C++. It is nowhere near completion, but I have been making significant progress by the day.",
            skills: ["c"],
            githubLink: "https://github.com/aftwasiq/PhysicsEngine"
        },
    ];


    return (
        <div className="App">
            <section className="content-section" id="section1">
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/aftwasiq/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinIcon} alt="LinkedIn"/>
                    </a>
                    <a href="https://github.com/aftwasiq" target="_blank" rel="noopener noreferrer">
                        <img src={githubIcon} alt="GitHub"/>
                    </a>
                    <a href="mailto:wasiq.abdullah.21@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img src={gmailIcon} alt="Gmail"/>
                    </a>
                </div>
                <h1>Abdullah Wasiq</h1>
                <div className="code-box">
                    <div className="title-bar">
                        <span className="title">Terminal</span>
                        <div className="buttons">
                            <div className="button red"></div>
                            <div className="button yellow"></div>
                            <div className="button green"></div>
                        </div>
                    </div>
                    <pre>
                        C:\Users\Aftwasiq&gt; info<br/>
                        ...Computer Science Undergraduate<br/>
                        ...Current Year: Second<br/>
                    </pre>
                </div>
            </section>

            <section className="content-section" id="section2">
                <h2>Projects</h2>
                {projects.map((project, index) => (
                    <Project
                        key={index}
                        title={project.title}
                        description={project.description}
                        skills={project.skills}
                    />
                ))}
            </section>

            <section className="content-section" id="section3">
                <p>Copyright © 2024 Abdullah Wasiq. All rights reserved.</p>
            </section>
        </div>
    );
}

export default App;
