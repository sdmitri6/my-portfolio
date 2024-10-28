import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Home.css'; // Add your custom styles here

const Home = () => {
  return (
    <div className="home">
      <h1>Hi! I'm Sďmitriy</h1>
      <p>Welcome to my portfolio...</p>
      <div className="button-container">
        <a href="/profile-image.jpeg" download className="animated-button">Download CV</a>
        <Link to="/contact" className="animated-button">Contact Us</Link> {/* Contact button */}
      </div>
    </div>
  );
};

export default Home;
