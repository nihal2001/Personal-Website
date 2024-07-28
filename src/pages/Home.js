import React from 'react';
import './Home.css';
import skiingImage from '../images/home-photo.jpeg';

const Home = () => (
    <div className="home">
        <div className="home-text">
            <h1>Nihal Mitta</h1>
            <p>Virginia Tech</p>
            <p>Computer Science</p>
            <p>Class of 2023</p>
        </div>
        <img className="home-image" src={skiingImage} alt="skiing" />   
    </div>
);

export default Home;
