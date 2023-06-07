import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Header.css';

const Header = () => {
    return (
    <div className="header">
        <div className="header-section">
            <h1>Nihal Mitta</h1>
        </div>
        <div className="header-section">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
        <div className="header-section">
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
}

export default Header;