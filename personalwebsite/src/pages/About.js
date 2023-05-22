import React from 'react';
import './Pages.css';
import aboutImage from '../images/sky.png';


const About = () => (
    <div className="about-container">
        <img className="about-image" src={aboutImage} alt="The sky" />
    </div>
);
 
export default About;
 