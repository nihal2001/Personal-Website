import React from 'react';
import './Pages.css';
import aboutImage from '../images/sky-2.png';


const About = () => (
    <div className="about-text">
        <h1>About Page</h1>
        <img className="about-image" src={aboutImage} alt="The sky" />
    </div>
);

export default About;
 