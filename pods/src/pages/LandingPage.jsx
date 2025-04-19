import React from 'react';
import { Link } from 'react-router-dom';
import podImage1 from '../images/pods.jpg';
import podImage2 from '../images/pods2.png';
import './LandingPage.css'; // Assuming you have a CSS file for styling

const LandingPage = () => {
  return (
    <div className="landing-page">
        <header className="header">
            <h1>Welcome to Pod Maker!</h1>
            <p>Create and manage your pods easily.</p>
            <p>Get started by creating a new pod or viewing your existing pods.</p>
        </header>
        <div className="image-container">
            <img src={podImage1} alt="Pod Maker" className="landing-image" />
            <img src={podImage2} alt="Pod Maker" className="landing-image" />
        </div>
        <div className="footer">
            <p>&copy; 2023 Pod Maker. All rights reserved.</p>
        </div>
    </div>
  );
};

export default LandingPage;