import React from 'react';
import './Pages.css';
import graph from '../images/project-graph.png';


const Projects = () => {
    return (
        <div className="projects">
            <div className="project-card">
                <img className="project-image" src={graph} alt="Graph" />   
                <div className="text-container">
                    <h2>Financial News Sentiment Analysis</h2>
                    <p>Sentiment analysis for financial statements, specifically found in financial news articles or headlines.</p>
                </div>
            </div>
            <div className="project-card">
                
                <h2>Project 2</h2>
                <p>This is a summary of project 2.</p>
                
            </div>
        </div>
    );
}

export default Projects;