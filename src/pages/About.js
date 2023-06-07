import React from 'react';
import './Pages.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const About = () => (
    <div className="about-container">
        <h1>About Me</h1>
        <p>
            Hello, my name is Nihal, and I am a recent graduate with a Bachelor's Degree in Computer Science from Virginia Tech.
            Driven by an unwavering passion for technology and innovation, I seek to utilize my skills in programming, and my knowledge of computer science, 
            to drive the advancement of technology in today's ever-evolving digital landscape.
            During my time at Virginia Tech, I developed a solid foundation in computer science theories and principles, 
            specializing in areas such as software development, machine learning, and algorithmic analysis. 
            With a keen interest in machine learning and digital signal proccessing, I'm eager and interested to contribute to impactful projects that promote creativity in the music production space. 
        </p>

        <p>
            Thank you for taking the time to visit my website. Please don't hesitate to get in touch if you'd like to discuss potential projects, collaboration opportunities, or if you just want to connect and chat about all things tech! You can reach me at nihal.mitta@gmail.com or through my social media channels linked below.

            I'm excited to embark on this journey in the world of Computer Science and look forward to making valuable connections along the way
        </p>
        <div className="social-icons">
            <a href="https://github.com/nihal2001" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/nihal-mitta/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://instagram.com/nihalmitta" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://youtube.com/channel/nihalmitta" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
        </div>
    </div>
);
 
export default About;
 