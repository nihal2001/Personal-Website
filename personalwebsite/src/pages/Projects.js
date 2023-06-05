import React from 'react';
import './Pages.css';
import graph from '../images/project-graph.png';
import webarchive from '../images/project-webarchive.png';


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
                <img className="project-image" src={webarchive} alt="Webarchive UI" />   
                <div className="text-container">
                    <h2>Web Archiver</h2>
                    <p>Archived lists of websites with the ability to record and replay them back.</p>
                </div>
            </div>
        </div>
    );
}

export default Projects;